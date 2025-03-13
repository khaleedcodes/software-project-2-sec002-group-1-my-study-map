const ProgressDashboard = () => {
  // Dummy progress data
  const progress = {
    completedAssignments: 15,
    totalAssignments: 20,
    currentGrade: 85, // Percentage
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">
        Progress Dashboard
      </h3>
      <div className="mb-4">
        <div className="text-lg font-semibold">
          Completed Assignments: {progress.completedAssignments}/
          {progress.totalAssignments}
        </div>
        <div className="text-lg font-semibold">
          Current Grade: {progress.currentGrade}%
        </div>
      </div>
      <div className="w-full bg-gray-300 h-2 mb-4">
        <div
          className="bg-blue-600 h-2"
          style={{
            width: `${
              (progress.completedAssignments / progress.totalAssignments) * 100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
