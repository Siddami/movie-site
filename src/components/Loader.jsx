const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" border-gray-800 border-8 rounded-full w-20 h-20 animate-spin"></div>
      <div className="bold text-5xl">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
