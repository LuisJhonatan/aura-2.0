import { motion } from "framer-motion";
export default function Button({ content }: { content: string }) {
  return (
    <motion.button
      className="relative px-6 py-3 text-[var(--bg-primary)] border-2 border-[var(--bg-primary)] rounded-lg overflow-hidden group cursor-pointer"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-[var(--bg-primary)]"
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
          },
        }}
        style={{
          originX: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          hover: {
            color: "#ffffff",
          },
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {content}
      </motion.span>
    </motion.button>
  );
}