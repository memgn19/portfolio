import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: "Fullstack MERN E-Commerce",
    description:
      "A full MERN e-commerce app with secure auth (access/refresh tokens), admin product & category management, and OTP-based email verification and password recovery, built for scalability, performance, and smooth UX.",
    image: "/public/projects/mern.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/memgn19/MernE-commerce",
  },
  {
    title: "Asynchronous Shopping Cart",
    description:
      "An AJAX-powered PHP shopping cart for adding, updating, and removing items in real time without page reloads.",
    image: "/public/projects/shopping-cart.png",
    tags: ["Php", "Javascript", "Ajax", "MySQL"],
    github: "https://github.com/memgn19/ShoppingCart",
  },
  {
    title: "Angular Task Manager",
    description:
      "Angular Task Manager App is a dynamic and responsive web application designed to help users efficiently organize and manage their daily tasks.",
    image: "/public/projects/task-manager.gif",
    tags: ["Angular", "Javascript"],
    github: "https://github.com/memgn19/AngularTaskManager",
  },
  {
    title: "React Weather App",
    description:
      "Weather app that delivers real-time weather updates and forecasts.",
    image: "/public/projects/weather.gif",
    tags: ["React", "Javascript"],
    github: "https://github.com/memgn19/WeatherApp",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header  */}
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Feature Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 ">
            These are the last personal projects I've been working on.
          </p>
        </div>

        {/* Projects grid  */}

        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image  */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay links  */}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content  */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, indexTag) => (<span key={indexTag} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium boder border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary/50 transition-all duration-300">{tag}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all  */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="https://github.com/memgn19">View All Projects </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
