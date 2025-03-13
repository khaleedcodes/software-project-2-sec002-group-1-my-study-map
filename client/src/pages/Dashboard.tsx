import Timetable from "../components/Timetable";
import GPA from "../components/GPA";
import Notes from "../components/Notes";
import ProgressDashboard from "../components/ProgressDashboard";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Timetable />
        <GPA />
        <Notes />
        <ProgressDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
