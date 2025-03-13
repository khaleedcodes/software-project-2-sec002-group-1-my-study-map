const Notes = () => {
  // Dummy notes data
  const notes = [
    { title: "Study for Math Exam", content: "Review chapters 1-5." },
    { title: "History Paper", content: "Draft outline for the paper on WWII." },
    {
      title: "Physics Homework",
      content: "Complete exercises on Newton’s Laws.",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Notes</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="mb-4">
            <h4 className="text-lg font-semibold text-blue-600">
              {note.title}
            </h4>
            <p className="text-gray-600">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
