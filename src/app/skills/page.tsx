"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Settings,
  BookOpen,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Clock,
  Target,
  ArrowLeft,
} from "lucide-react";

// Type definitions
interface Skill {
  name: string;
  level: number;
  experience: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
  skills: Skill[];
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  icon: any;
  color: string;
}

interface LearningGoal {
  skill: string;
  progress: number;
  target: string;
  icon: string;
}

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "React", level: 95, experience: "2+ år", icon: "⚛️" },
        { name: "Next.js", level: 90, experience: "2+ år", icon: "▲" },
        { name: "TypeScript", level: 88, experience: "2+ år", icon: "📘" },
        { name: "JavaScript", level: 92, experience: "2+ år", icon: "🟡" },
        { name: "HTML5", level: 95, experience: "2+ år", icon: "🌐" },
        { name: "CSS3", level: 90, experience: "2+ år", icon: "🎨" },
        { name: "Tailwind CSS", level: 85, experience: "2+ år", icon: "💨" },
        { name: "Vue.js", level: 30, experience: "6+ mnd", icon: "💚" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Node.js", level: 88, experience: "2+ år", icon: "🟢" },
        { name: "Express.js", level: 85, experience: "2+ år", icon: "🚀" },
        { name: "MySQL", level: 80, experience: "2+ år", icon: "🐬" },
        { name: "PostMan", level: 75, experience: "2+ år", icon: "🍃" },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "React Native", level: 70, experience: "2 år", icon: "📱" },
        { name: "Expo", level: 0, experience: "0 år", icon: "⚡" },
        { name: "Flutter", level: 0, experience: "0 år", icon: "🦋" },
        {
          name: "iOS Development",
          level: 0,
          experience: "0 år",
          icon: "🍎",
        },
        {
          name: "Android Development",
          level: 0,
          experience: "0 år",
          icon: "🤖",
        },
      ],
    },
    {
      id: "tools",
      name: "Verktøy & DevOps",
      icon: Settings,
      color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Git", level: 90, experience: "2+ år", icon: "📝" },
        { name: "GitHub Actions", level: 72, experience: "2+ år", icon: "⚙️" },
        { name: "Jest", level: 78, experience: "2+ år", icon: "🃏" },
        { name: "Figma", level: 75, experience: "2+ år", icon: "🎨" },
        { name: "VS Code", level: 95, experience: "2+ år", icon: "💻" },
      ],
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Frontend Developer",
      issuer: "Gokstad Akademiet",
      date: "2023 - 2025",
      icon: Award,
      color: "text-yellow-400",
    },
    {
      title: "Elektriker",
      issuer: "K2 Utdanning",
      date: "2021 - 2022",
      icon: () => <span className="text-xl">⚡️</span>,
      color: "text-blue-400",
    },
    {
      title: "Bore og BrønnTech",
      issuer: "Riggutdanning",
      date: "2022",
      icon: () => <span className="text-xl">🛢</span>,
      color: "text-green-400",
    },
  ];

  const learningGoals: LearningGoal[] = [
    {
      skill: "React JS",
      progress: 100,
      target: "Q3 2025",
      icon: "⚙️",
    },
    {
      skill: "Angular",
      progress: 50,
      target: "Q4 2025",
      icon: "🤖",
    },
    {
      skill: "Vue",
      progress: 25,
      target: "2026",
      icon: "💚",
    },
  ];

  const categories = [
    { id: "all", name: "Alle Ferdigheter", icon: Globe },
    ...skillCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
    })),
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  const SkillBar = ({
    skill,
    animationDelay = 0,
  }: {
    skill: Skill;
    animationDelay?: number;
  }) => (
    <div
      className="mb-6 animate-slide-in-left"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-white">{skill.name}</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-300">
          <span className="bg-gray-700 px-2 py-1 rounded text-xs">
            {skill.experience}
          </span>
          <span className="font-bold text-blue-400">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animatedBars ? `${skill.level}%` : "0%",
            transitionDelay: `${animationDelay}ms`,
          }}
        />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-white">
        {/* Tilbake-knapp */}
        <div className="mb-10">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg animate-fade-in-up"
          >
            <ArrowLeft size={18} />
            <span>Tilbake</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mine Ferdigheter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En oversikt over mine tekniske ferdigheter, erfaring og
            kontinuerlige læring innenfor moderne webutvikling og
            programvareutvikling.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-400">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <IconComponent size={18} />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${600 + categoryIndex * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    animationDelay={
                      1000 + categoryIndex * 200 + skillIndex * 100
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <section className="mb-16 animate-fade-in-up animation-delay-1200">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Sertifikater & Utmerkelser
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${1400 + index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <achievement.icon
                    className={`${achievement.color} flex-shrink-0`}
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {achievement.issuer}
                    </p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={12} className="mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Goals */}
        <section className="animate-fade-in-up animation-delay-1600">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Pågående Læring
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${1800 + index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{goal.icon}</span>
                    <h3 className="font-bold text-white">{goal.skill}</h3>
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Target size={14} className="mr-1" />
                    {goal.target}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Fremgang</span>
                    <span className="text-sm font-bold text-green-400">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedBars ? `${goal.progress}%` : "0%",
                        transitionDelay: `${2000 + index * 150}ms`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Startet</span>
                  <TrendingUp size={12} />
                  <span>Mål</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-2200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 border border-blue-500/30">
            <BookOpen className="mx-auto mb-4 text-blue-200" size={48} />
            <h3 className="text-2xl font-bold mb-4">Alltid lærer noe nytt</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Teknologi utvikler seg raskt, og jeg elsker å holde meg oppdatert
              med de nyeste trendene og beste praksisene innen webutvikling.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Kontinuerlig læring
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Best practices
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-2200 {
          animation-delay: 2.2s;
        }
      `}</style>
    </main>
  );
};

export default SkillsPage;
