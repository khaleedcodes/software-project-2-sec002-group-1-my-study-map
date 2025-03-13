const Reminders = () => {
  const reminders = [
    { title: "Math Exam", date: "2025-03-15", time: "9:00 AM" },
    { title: "History Paper Due", date: "2025-03-20", time: "11:59 PM" },
    { title: "Physics Homework Due", date: "2025-03-18", time: "5:00 PM" },
  ];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Reminders</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index} className="mb-4">
            <h4 className="text-lg font-semibold text-blue-600">
              {reminder.title}
            </h4>
            <p className="text-gray-600">
              {reminder.date} at {reminder.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminders;
