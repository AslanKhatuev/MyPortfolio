const ProfileImage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800 rounded-2xl xs:rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background circles - fully responsive */}
      <div className="absolute inset-0 rounded-2xl xs:rounded-3xl overflow-hidden">
        <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-4 xs:left-6 sm:left-8 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-yellow-400/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-pink-400/20 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main avatar illustration - completely responsive */}
      <div className="text-white relative z-10 p-2 xs:p-3 sm:p-4">
        <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 mx-auto">
          {/* Head - responsive sizing and borders */}
          <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-22 2xl:h-22 mx-auto rounded-full border-2 xs:border-3 sm:border-4 md:border-5 lg:border-6 xl:border-7 2xl:border-8 border-green-400 bg-gradient-to-b from-blue-400/20 to-transparent shadow-lg hover:border-[#00ACFB] transition-all duration-500 hover:scale-105"></div>

          {/* Body - responsive sizing and spacing */}
          <div className="w-14 h-7 xs:w-17 xs:h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-27 lg:h-14 xl:w-30 xl:h-16 2xl:w-32 2xl:h-18 mt-1.5 xs:mt-2 sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4 mx-auto border-t-2 xs:border-t-3 sm:border-t-4 md:border-t-5 lg:border-t-6 xl:border-t-7 2xl:border-t-8 border-green-400 rounded-t-full bg-gradient-to-b from-blue-400/20 to-transparent shadow-lg hover:border-[#00ACFB] transition-all duration-500 hover:scale-105"></div>
        </div>

        {/* Decorative bouncing dots - responsive spacing and sizing */}
        <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex justify-center space-x-1 xs:space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3">
          <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-[#00ACFB] rounded-full animate-bounce delay-200"></div>
          <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-blue-400 rounded-full animate-bounce delay-400"></div>
          <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-purple-400 rounded-full animate-bounce delay-600"></div>
        </div>
      </div>

      {/* Floating particles - responsive positioning and sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400/60 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/6 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400/60 rounded-full animate-ping delay-1200"></div>
        <div className="absolute top-1/6 left-1/2 w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 bg-pink-400/60 rounded-full animate-ping delay-300"></div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl xs:rounded-3xl bg-gradient-to-r from-[#00ACFB]/0 via-green-400/0 to-blue-400/0 hover:from-[#00ACFB]/10 hover:via-green-400/10 hover:to-blue-400/10 transition-all duration-700 pointer-events-none"></div>

      {/* Corner accent lines - responsive */}
      <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-green-400/60 rounded-tl-lg"></div>
      <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#00ACFB]/60 rounded-tr-lg"></div>
      <div className="absolute bottom-2 left-2 xs:bottom-3 xs:left-3 sm:bottom-4 sm:left-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-blue-400/60 rounded-bl-lg"></div>
      <div className="absolute bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-purple-400/60 rounded-br-lg"></div>
    </div>
  );
};

export default ProfileImage;
