const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to MyStudyMap
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Your academic organization and tracking platform.
      </p>
      <a
        href="/login"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
      >
        Get Started
      </a>
    </div>
  );
};

export default Home;
