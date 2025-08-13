import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      company: "Techno Main Salt Lake",
      location: "Kolkata, India",
      period: "2022 - 2026",
      type: "education",
      description: [
        "Currently pursuing core Computer Science courses including Data Structures, Algorithms, and Machine Learning",
        "Active member of coding and AI/ML community",
        "Expected graduation: 2026"
      ]
    },
    {
      title: "Higher Secondary Education",
      company: "Chatra Nandalal Institution",
      location: "Serampore, India",
      period: "2022",
      type: "education",
      description: [
        "Specialization in Science stream with focus on Mathematics, Physics, and Chemistry"
      ]
    },
    {
      title: "Secondary Education",
      company: "Chatra Nandalal Institution",
      location: "Serampore, India",
      period: "2020",
      type: "education",
      description: [
        "Completed secondary education with distinction"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My Academic Background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div 
                key={index}
                className="relative fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="md:ml-20 bg-white p-6 rounded-xl card-shadow hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-accent font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  {/* Experience type badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'experience' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {item.type === 'experience' ? 'Work Experience' : 'Education'}
                    </span>
                  </div>
                  
                  {/* Achievements/Description */}
                  <ul className="space-y-2">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;