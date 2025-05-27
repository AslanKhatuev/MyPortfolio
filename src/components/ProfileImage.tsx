const ProfileImage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm">
      {/* Animated background circles */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 md:w-10 md:h-10 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-8 w-4 h-4 md:w-8 md:h-8 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main avatar illustration */}
      <div className="text-white relative z-10">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mx-auto">
          {/* Head */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 mx-auto rounded-full border-4 md:border-6 lg:border-8 border-green-400 bg-gradient-to-b from-blue-400/20 to-transparent shadow-lg hover:border-[#00ACFB] transition-colors duration-500"></div>

          {/* Body */}
          <div className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 xl:w-40 xl:h-20 mt-3 md:mt-4 mx-auto border-t-4 md:border-t-6 lg:border-t-8 border-green-400 rounded-t-full bg-gradient-to-b from-blue-400/20 to-transparent shadow-lg hover:border-[#00ACFB] transition-colors duration-500"></div>
        </div>

        {/* Decorative elements */}
        <div className="mt-4 md:mt-6 flex justify-center space-x-2 md:space-x-3">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00ACFB] rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 md:w-2 md:h-2 bg-green-400/60 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-blue-400/60 rounded-full animate-ping delay-1000"></div>
      </div>
    </div>
  );
};

export default ProfileImage;
