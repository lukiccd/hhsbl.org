import React from 'react';

const Calendar = () => {
   const days = [
      { day: "П", date: "1", oldDate: "19", event: "Преподобни Прохор Пчињски", type: "слава", foodType: "уље" },
      { day: "С", date: "2", oldDate: "20", event: "Свети великомученик Артемије; Задушнице јесење (митровске)", type: "задушнице", foodType: "мрс" },
      { day: "Н", date: "3", oldDate: "21", event: "Недеља 19. по Духовима", type: "", foodType: "мрс" },
      { day: "П", date: "4", oldDate: "22", event: "Свети апостол Јаков", type: "", foodType: "мрс" },
      { day: "У", date: "5", oldDate: "23", event: "Свети великомученик Арета", type: "", foodType: "вода" },
      { day: "С", date: "6", oldDate: "24", event: "Свети мученици Маркијан и Мартиније", type: "", foodType: "мрс" },
      { day: "Ч", date: "7", oldDate: "25", event: "Свети мученик Нестор", type: "", foodType: "мрс" },
      { day: "П", date: "8", oldDate: "26", event: "Свети великомученик Димитрије – Митровдан", type: "слава", foodType: "риба" },
      { day: "С", date: "9", oldDate: "27", event: "", type: "", foodType: "мрс" },
      { day: "Н", date: "10", oldDate: "28", event: "Недеља 20. по Духовима", type: "", foodType: "мрс" },
      { day: "П", date: "11", oldDate: "29", event: "Преп. Аврамије Затворник", type: "слава", foodType: "мрс" },
      { day: "У", date: "12", oldDate: "30", event: "", type: "", foodType: "мрс" },
      { day: "С", date: "13", oldDate: "1", event: "", type: "", foodType: "вода" },
      { day: "Ч", date: "14", oldDate: "2", event: "Свети Козма и Дамјан – Врачеви", type: "слава", foodType: "мрс" },
      { day: "П", date: "15", oldDate: "3", event: "", type: "", foodType: "вода" },
      { day: "С", date: "16", oldDate: "4", event: "", type: "", foodType: "мрс" },
      { day: "Н", date: "17", oldDate: "5", event: "Недеља 21. по Духовима", type: "", foodType: "мрс" },
      { day: "П", date: "18", oldDate: "6", event: "", type: "", foodType: "мрс" },
      { day: "У", date: "19", oldDate: "7", event: "", type: "", foodType: "вода" },
      { day: "С", date: "20", oldDate: "8", event: "", type: "", foodType: "мрс" },
      { day: "Ч", date: "21", oldDate: "9", event: "Сабор Светог Архангела Михаила – Аранђеловдан", type: "слава", foodType: "мрс" },
      { day: "П", date: "22", oldDate: "10", event: "", type: "", foodType: "вода" },
      { day: "С", date: "23", oldDate: "11", event: "", type: "", foodType: "мрс" },
      { day: "Н", date: "24", oldDate: "12", event: "Недеља 22. по Духовима", type: "", foodType: "мрс" },
      { day: "П", date: "25", oldDate: "13", event: "", type: "", foodType: "вода" },
      { day: "У", date: "26", oldDate: "14", event: "", type: "", foodType: "мрс" },
      { day: "С", date: "27", oldDate: "15", event: "", type: "", foodType: "уље" },
      { day: "Ч", date: "28", oldDate: "16", event: "", type: "", foodType: "уље" },
      { day: "П", date: "29", oldDate: "17", event: "", type: "", foodType: "мрс" },
      { day: "С", date: "30", oldDate: "18", event: "", type: "", foodType: "вода" },
   ];

   return (
      <div className="max-w-[800px] mx-auto px-4 py-8 text-black">
        <h2 className="text-xl font-bold text-center mb-4">Православни календар за Новембар 2024</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">
                <div className="flex flex-col items-center text-xs ">
                  <span>д</span>
                  <span>а</span>
                  <span>н</span>
                </div>
              </th>
              <th className="p-2 border">
                <div className="flex flex-col items-center text-xs ">
                  <span>н</span>
                  <span>о</span>
                  <span>в</span>
                  <span>и</span>
                </div>
              </th>
              <th className="p-2 border">
                <div className="flex flex-col items-center text-xs ">
                  <span>с</span>
                  <span>т</span>
                  <span>а</span>
                  <span>р</span>
                  <span>и</span>
                </div>
              </th>
              <th className="p-2 border" colSpan="3">
                <div className="flex justify-between px-2 ">
                  <span>2024.</span>
                  <span>Новембар</span>
                  <span>30 дана</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => (
              <tr key={index} className={day.type === "слава" ? "bg-yellow-50" : "bg-white"}>
                <td className="p-2 border text-center">{day.day}</td>
                <td className="p-2 border text-center">{day.date}</td>
                <td className="p-2 border text-center text-gray-500">{day.oldDate}</td>
                <td className="p-2 border">
                  {day.type === "слава" && (
                    <span className="bg-gray-700 text-white px-2 py-1 mr-2">СЛАВА</span>
                  )}
                  {day.type === "задушнице" ? (
                    <a href="/zadusnice" className="border-2 border-gray-500 px-1 text-black">
                      <strong>Задушнице</strong> јесење (митровске)
                    </a>
                  ) : (
                    <span className={day.type === "слава" ? "font-semibold text-red-700" : "text-gray-800"}>
                      {day.event}
                    </span>
                  )}
                </td>
                <td className="p-2 border text-center">{day.foodType}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className="p-2 border-t bg-gray-100">
                <div className="flex">
                  <a href="/oktobar-2024" className="flex-1 text-center bg-gray-200 py-2 mx-1">Октобар 2024.</a>
                  <a href="/decembar-2024" className="flex-1 text-center bg-gray-200 py-2 mx-1">Децембар 2024.</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Calendar;