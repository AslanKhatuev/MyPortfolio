"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  Search,
  ArrowLeft,
} from "lucide-react";

// Type definitions
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  date: string;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: any;
}

interface ProjectCardProps {
  project: Project;
  featured: boolean;
  animationDelay: number;
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleBack = () => {
    window.history.back();
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Plattform for e-handel, blogg, prosjekter og arrangementer",
      description:
        "Fullstack e-handelsløsning med Next.js, Node.js, MySQL og Strapi Adminpanel. Inkluderer brukerautentisering, betalingsintegrasjon og admin-panel.",
      image: "/The_cave_tech_D.jpg",
      category: "fullstack",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MySQL",
        "Strapi",
        "Figma",
        "PostMan",
        "TailwindCSS",
      ],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/The-Cave-Tech/GokstadAkademiet2025.git",
      date: "2025",
      featured: true,
    },
    {
      id: 2,
      title: "Min Portfolio ",
      description:
        "Responsiv porteføljenettsted bygget med Next.js og Tailwind CSS. Fokus på moderne design og optimal ytelse.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/example/portfolio",
      date: "2025",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for oppgavehåndtering med autentisering, rolle-basert tilgang og real-time oppdateringer.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "backend",
      technologies: ["Express.js", "MySQL", "JWT", "Jest"],
      githubUrl: "https://github.com/example/task-api",
      date: "2023",
      featured: false,
    },

    {
      id: 6,
      title: "Blogging Platform",
      description:
        "CMS og bloggplattform med markdown-støtte, kommentarsystem og SEO-optimalisering.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68e2c6b180?w=600&h=400&fit=crop",
      category: "fullstack",
      technologies: [ "React", "MySQL", ],
      demoUrl: "https://blog.example.com",
      githubUrl: "https://github.com/example/blog-platform",
      date: "2022",
      featured: false,
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "Alle Prosjekter", icon: Globe },
    { id: "fullstack", name: "Fullstack", icon: Code },
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
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
            Mine Prosjekter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Utforsk en samling av mine nyeste arbeider innen webutvikling, fra
            enkle nettsider til komplekse fullstack-applikasjoner.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fade-in-up animation-delay-400">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Søk i prosjekter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <IconComponent size={16} />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center animate-fade-in-up animation-delay-600">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Utvalgte Prosjekter
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={true}
                  animationDelay={800 + index * 200}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8 animate-fade-in-up animation-delay-1000">
            Alle Prosjekter
          </h2>
          {regularProjects.length === 0 && featuredProjects.length === 0 ? (
            <div className="text-center py-16 animate-fade-in-up animation-delay-1200">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <p className="text-gray-400 text-lg">
                Ingen prosjekter funnet for "{searchTerm}" i kategorien "
                {categories.find((c) => c.id === selectedCategory)?.name}".
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={false}
                  animationDelay={1200 + index * 100}
                />
              ))}
            </div>
          )}
        </section>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
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
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
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
      `}</style>
    </main>
  );
};

const ProjectCard = ({
  project,
  featured,
  animationDelay,
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm animate-scale-in ${
        featured ? "md:col-span-1" : ""
      }`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
            <Code className="text-gray-500" size={32} />
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Utvalgt
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
              title="Se demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors duration-200"
              title="Se kode"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs font-medium border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 text-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <ExternalLink size={14} className="mr-1" />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              <Github size={14} className="mr-1" />
              Kode
            </a>
          )}
          <div className="ml-auto">
            <ArrowRight
              size={16}
              className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
