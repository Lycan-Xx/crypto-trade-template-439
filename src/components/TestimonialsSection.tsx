
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Working with this developer was an absolute pleasure. They delivered exceptional results on time and exceeded our expectations with their attention to detail and technical expertise."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Ventures",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The quality of work and professionalism shown throughout our project was outstanding. They understood our vision and brought it to life with clean, efficient code."
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Their ability to bridge the gap between design and development is remarkable. They took our designs and created pixel-perfect, responsive implementations that work flawlessly."
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "Digital Solutions Ltd.",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "A highly skilled developer who consistently delivers high-quality solutions. Their expertise in modern web technologies and problem-solving abilities are truly impressive."
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    company: "Global Tech Corp",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Communication was excellent throughout the entire project. They kept us informed at every step and delivered exactly what we needed, when we needed it."
  },
  {
    name: "James Miller",
    role: "Portfolio Manager",
    company: "Investment Firm",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The platform's ability to handle complex requirements while maintaining simplicity in its interface is remarkable. It's been invaluable for our business operations."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            Client{" "}
            <span className="text-gradient font-medium">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee space-x-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-96 glass rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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

export default TestimonialsSection;
