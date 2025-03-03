import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EntryPage from "../../components/ui/EntryPage";
import HomeSecondSection from "./components/HomeSecondSection";
import HomeFirstSection from "./components/HomeFirstSection";

export default function Home() {
  const [start, setStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStart(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {start ? (
        <motion.div
          key="entry"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EntryPage />
        </motion.div>
      ) : (
        <motion.section
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HomeFirstSection />
          <HomeSecondSection />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
