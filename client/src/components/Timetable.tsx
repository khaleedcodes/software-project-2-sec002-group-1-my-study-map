const Timetable = () => {
  // Dummy data for timetable
  const timetableData = [
    { day: "Monday", time: "9:00 AM - 11:00 AM", subject: "Math 101" },
    { day: "Tuesday", time: "2:00 PM - 4:00 PM", subject: "History 201" },
    { day: "Wednesday", time: "11:00 AM - 1:00 PM", subject: "Physics 102" },
    {
      day: "Thursday",
      time: "3:00 PM - 5:00 PM",
      subject: "Computer Science 101",
    },
    { day: "Friday", time: "10:00 AM - 12:00 PM", subject: "Chemistry 103" },
  ];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Timetable</h3>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Day</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Subject</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{entry.day}</td>
              <td className="py-2 px-4 border-b">{entry.time}</td>
              <td className="py-2 px-4 border-b">{entry.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
