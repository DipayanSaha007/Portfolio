import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "",
      title: "",
      company: "",
      content: "",
      rating: "",
      avatar: ""
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl card-shadow hover-lift fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;