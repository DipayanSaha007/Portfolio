import { Code, Award, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Passionate Developer",
      description: "Building innovative projects in web development and machine learning"
    },
    {
      icon: Users,
      title: "Collaborative Learner",
      description: "Worked on multiple team projects"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and tools"
    }
  ];

  return (
    <section id="about" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create impactful solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Building the Future, One Line at a Time
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I specialize in creating ML models, scalable web applications using modern technologies like React, TypeScript, and cloud platforms.
              </p>
              <p>
                My journey began with a Computer Science degree from Techno Main Salt Lake, where I discovered 
                my passion for solving complex problems through elegant code. Since then, I've worked on many 
                technologies to further improve my knowledge.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest trends in AI and machine learning.
              </p>
            </div>
          </div>
          
          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-delay">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl card-shadow hover-lift group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;