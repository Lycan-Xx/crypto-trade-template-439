import { motion } from "framer-motion";
const LogoCarousel = () => {
  const logos = ["/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png", "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png", "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png", "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png", "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png"];
  const extendedLogos = [...logos, ...logos, ...logos];
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container px-4 mb-12">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider">
          Trusted by leading organizations
        </p>
      </div>
      <div className="relative">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex space-x-16 items-center"
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default LogoCarousel;