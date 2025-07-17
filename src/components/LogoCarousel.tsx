import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = ["/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png", "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png", "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png", "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png", "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png"];
  const extendedLogos = [...logos, ...logos, ...logos];
  
  return (
    <section className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Trusted by leading companies
          </h2>
          <p className="text-gray-400">
            Join thousands of satisfied users worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1600]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 items-center"
          >
            {extendedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default LogoCarousel;