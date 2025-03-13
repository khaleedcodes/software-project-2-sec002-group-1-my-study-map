const GPA = () => {
  // Dummy GPA data
  const gpa = 3.8;

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">GPA</h3>
      <div className="text-4xl font-bold text-blue-700">{gpa}</div>
    </div>
  );
};

export default GPA;
