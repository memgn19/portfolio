import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Thoughtful Interfaces",
    description:
      "Focused on building clean, intuitive, and visually appealing user experiences",
  },
  {
    icon: Rocket,
    title: "Efficiency",
    description:
      "Delivering solutions that work smoothly without overcomplicating the process",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I enjoy teamwork and contributing to building something meaningful",
  },
  {
    icon: Lightbulb,
    title: "Attention to Detail",
    description:
      "Caring about the small details that make a product feel polished and engaging",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium uppercase">
                About me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building nice things,{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                TERMINAR de rellenar
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a junior developer with about a year of hands-on experience
                building web applications, mainly working with React — the
                technology I enjoy the most. What started as an interest in how
                interfaces come together has naturally turned into a focus on
                creating clean, intuitive, and good-looking user experiences
              </p>
              <p>
                I’ve also worked with PHP, Java, C#, SQL Server, and Angular, so
                I’m comfortable moving between frontend and backend when needed.
                Still, I’m at my best when I’m shaping interfaces and paying
                attention to the details that make a product feel right. On my
                GitHub, most of my projects lean toward frontend work, including
                a MERN-based e-commerce project.
              </p>
              <p>
                I like building things that not only work well but also look
                good. I tend to focus on efficiency in my work, and I enjoy
                collaborating with others — I think good teamwork is what really
                brings projects to life.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to keep improving as a developer while building
                products that are simple, efficient, and enjoyable to use.
              </p>
            </div>
          </div>

          {/* Right Column  */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass p-6 rounded-2xl group animate-fade-in " style={{animationDelay: `${(index + 1) * 100 }ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><highlight.icon className="2-6 h-6 text-primary"/></div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
