import { motion } from "framer-motion";
import useHeight from "../../hooks/useHeight";

export default function EntryPage( ) {
  const { height } = useHeight();
  return (
    <div
      className={`flex items-center justify-center relative z-50 `}
      style={{ height, background: "var(--bg-primaty-degrade)" }}
    >
      <svg
        className="w-96 h-32"
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letra A */}
        <motion.path
          d="M5,45 L20,5 L35,45 M12.5,25 L27.5,25"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Letra U */}
        <motion.path
          d="M50,5 V30 Q50,45 70,45 Q90,45 90,30 V5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.25,
          }}
        />

        {/* Letra R */}
        <motion.path
          d="M100,45 V5 H120 Q130,5 130,15 Q130,25 120,25 H100 M100,25 L130,45"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />

        {/* Letra A */}
        <motion.path
          d="M155,45 L170,5 L185,45 M162.5,25 L177.5,25"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.75,
          }}
        />
      </svg>
    </div>
  );
}