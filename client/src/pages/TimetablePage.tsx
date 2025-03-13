import Timetable from "../components/Timetable";

const TimetablePage = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        Your Timetable
      </h2>
      <Timetable />
    </div>
  );
};

export default TimetablePage;
