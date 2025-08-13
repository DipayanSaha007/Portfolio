import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Salon Service Management System",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include payment processing, inventory management, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/DipayanSaha007/ossms-frontend",
      demo: "https://ossms-frontend.vercel.app/"
    },
    {
      title: "Sports Person Recognitionp",
      description: "This web app can detect sports persons like Lionel Messi, Maria Sharapova, Roger Federer, Serena Williams, Virat Kohli and give you an estimated percentage of matching against an uploaded image.",
      image: "https://tse3.mm.bing.net/th/id/OIP.CYzm_Pix9jCmjUbLIflcKQHaEK?pid=Api&P=0&h=180",
      tech: ["ML", "Python", "SKLearn", "Streamlit"],
      github: "https://github.com/DipayanSaha007/Image_Recognition_App",
      demo: "https://imagerecognitionapp-ainz.streamlit.app/"
    },
    {
      title: "Object Detection",
      description: "This model can detect objects from an uploaded image and video.",
      image: "https://imerit.net/wp-content/uploads/2023/04/Feature_Real-Time-Object-Detection-Using-YOLO.jpg",
      tech: ["ML", "YOLOv8", "Python", "Streamlit"],
      github: "https://github.com/DipayanSaha007/Object_Detection",
      demo: "https://objectdetection-ainz.streamlit.app/"
    },
    {
      title: "CO2 Emission Prediction",
      description: "This web app can detect CO2 emission of your vehicle based on your car details.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center",
      tech: ["ML", "SKLear", "Python", "Streamlit"],
      github: "https://github.com/DipayanSaha007/CO2_Emission_Prediction",
      demo: "https://co2emissionprediction-ainz.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden card-shadow hover-lift group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;