import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Python & Machine Learning", level: 85 },
    { name: "Deep Learning (TensorFlow, PyTorch)", level: 84 },
    { name: "Databases (SQL & MongoDB)", level: 82 },
    { name: "React & Next.js", level: 75 },
  ];

  const softSkills = [
    "Leadership & Cross-Functional Team Management",
    "Agile Project Planning & Execution",
    "Analytical Problem Solving",
    "Clear & Persuasive Communication",
    "Adaptability & Continuous Learning"
  ];

  // const tools = [
  //   "Git & GitHub", "Docker", 
  //   "VS Code"
  // ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills with Progress Bars */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-primary mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-3 bg-secondary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Soft Skills</h3>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-navy-light rounded-lg hover-lift fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-white border border-border rounded-lg text-center text-sm font-medium text-foreground hover-lift card-shadow fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;