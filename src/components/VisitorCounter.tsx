"use client";

import { useState, useEffect } from "react";
import { Eye, Users, TrendingUp } from "lucide-react";

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    isLoading: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Initialize visitor data
    initializeVisitorData();

    return () => clearTimeout(timer);
  }, []);

  const initializeVisitorData = () => {
    try {
      const savedData = localStorage.getItem("portfolioVisitorData");
      const today = new Date().toDateString();

      let data = {
        totalVisits: 1,
        uniqueVisitors: 1,
        todayVisits: 1,
        lastVisit: today,
        visitDates: [today],
        isReturningVisitor: false,
      };

      if (savedData) {
        const parsed = JSON.parse(savedData);

        data.totalVisits = (parsed.totalVisits || 0) + 1;

        if (parsed.lastVisit === today) {
          data.todayVisits = (parsed.todayVisits || 0) + 1;
        } else {
          data.todayVisits = 1;
        }

        const visitDates = parsed.visitDates || [];
        if (!visitDates.includes(today)) {
          data.uniqueVisitors = (parsed.uniqueVisitors || 0) + 1;
          data.visitDates = [...visitDates, today];
        } else {
          data.uniqueVisitors = parsed.uniqueVisitors || 1;
          data.visitDates = visitDates;
          data.isReturningVisitor = true;
        }
      }

      localStorage.setItem("portfolioVisitorData", JSON.stringify(data));

      setTimeout(() => {
        setVisitorData({
          totalVisits: data.totalVisits,
          uniqueVisitors: data.uniqueVisitors,
          todayVisits: data.todayVisits,
          isLoading: false,
        });
      }, 800);
    } catch (error) {
      console.error("Feil ved lasting av besøksdata:", error);
      setVisitorData({
        totalVisits: 1,
        uniqueVisitors: 1,
        todayVisits: 1,
        isLoading: false,
      });
    }
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:border-white/30 transition-all duration-1000 ease-out hover:transform hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "1800ms" }}
    >
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Eye className="w-5 h-5 text-blue-400" />
        <h3 className="text-white text-lg font-semibold">Besøksstatistikk</h3>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold text-white mb-1">
            {visitorData.isLoading ? (
              <div className="w-8 h-6 bg-gray-600/50 rounded mx-auto animate-pulse"></div>
            ) : (
              <span className="counter-animation">
                {visitorData.totalVisits}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">Totalt</p>
        </div>

        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold text-green-400 mb-1">
            {visitorData.isLoading ? (
              <div className="w-8 h-6 bg-gray-600/50 rounded mx-auto animate-pulse"></div>
            ) : (
              <span className="counter-animation">
                {visitorData.uniqueVisitors}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">Unike</p>
        </div>

        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1">
            {visitorData.isLoading ? (
              <div className="w-8 h-6 bg-gray-600/50 rounded mx-auto animate-pulse"></div>
            ) : (
              <span className="counter-animation">
                {visitorData.todayVisits}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">I dag</p>
        </div>
      </div>

      {!visitorData.isLoading && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            {visitorData.totalVisits > 1 ? (
              <>
                🎉 Takk for at du kom tilbake! Besøk nr.{" "}
                <span className="text-green-400 font-semibold">
                  {visitorData.totalVisits}
                </span>
              </>
            ) : (
              <>
                👋 Velkommen! Du er besøkende nr.{" "}
                <span className="text-blue-400 font-semibold">
                  {visitorData.uniqueVisitors}
                </span>
              </>
            )}
          </p>
        </div>
      )}

      <style jsx>{`
        .counter-animation {
          display: inline-block;
          animation: countUp 1s ease-out;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default VisitorCounter;
