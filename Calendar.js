import React, { useState } from "react";
import {
  startOfWeek,
  addDays,
  format,
  subWeeks,
  addWeeks,
  isSameDay,
} from "date-fns";

// MODELE DE RESERVATIONS
// [
//   {
//       "date": "2023-06-10",
//       "hours": [
//           9,
//           10,
//           11
//       ]
//   },
//   {
//       "date": "2023-06-13",
//       "hours": [
//           13,
//           14,
//           15
//       ]
//   }
// ];

// MODELE DE DAYS :
// [
//   {
//       "name": "Lundi",
//       "open": false
//   },
//   {
//       "name": "Mardi",
//       "open": true
//   },
//   {
//       "name": "Mercredi",
//       "open": true
//   },
//   {
//       "name": "Jeudi",
//       "open": true
//   },
//   {
//       "name": "Vendredi",
//       "open": true
//   },
//   {
//       "name": "Samedi",
//       "open": true
//   },
//   {
//       "name": "Dimanche",
//       "open": false
//   }
// ]

const Calendar = ({ reservations, days }) => {
  // HOOKS / PROPS
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [reservedDates, setReservedDates] = useState(reservations);

  const daysOfWeek = days;
  const hoursOfDay = Array.from({ length: 14 }, (_, i) => i + 8);

  // HANDLERS
  const handleClick = (day, hour) => {
    const selectedDate = addDays(
      currentWeekStart,
      daysOfWeek.findIndex((d) => d.name === day)
    );
    const selectedDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour
    );
    setSelectedDateTime(selectedDateTime);
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prevWeekStart) => subWeeks(prevWeekStart, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart((prevWeekStart) => addWeeks(prevWeekStart, 1));
  };

  // RENDER
  return (
    <div>
      <div>
        <button onClick={goToPreviousWeek}>Précédent</button>
        <button onClick={goToNextWeek}>Suivant</button>
      </div>
      <div style={{ display: "flex" }}>
        {daysOfWeek.map((day) => (
          <div key={day.name} style={{ flex: 1, textAlign: "center" }}>
            <div>{day.name}</div>
            <div>
              {format(
                addDays(currentWeekStart, daysOfWeek.indexOf(day)),
                "dd/MM"
              )}
            </div>
            {hoursOfDay.map((hour) => {
              const isReserved = reservedDates.some(
                (date) =>
                  isSameDay(
                    addDays(currentWeekStart, daysOfWeek.indexOf(day)),
                    new Date(date.date)
                  ) && date.hours.includes(hour)
              );

              return (
                <button
                  key={`${day.name}-${hour}`}
                  onClick={() => handleClick(day.name, hour)}
                  disabled={isReserved || !day.open}
                  style={{
                    display: "block",
                    margin: "8px auto",
                    cursor: "pointer",
                  }}
                >
                  {hour}:00
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {selectedDateTime && (
        <div>Vous avez sélectionné : {selectedDateTime.toLocaleString()}</div>
      )}
    </div>
  );
};

export default Calendar;
