import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Binary } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Matrix-style falling code effect
  const CodeRain = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: "100vh", opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
          className="absolute text-xs font-mono text-primary"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {`{${Math.random().toString(36).substring(7)}}`}
        </motion.div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1612] via-[#202B26] to-[#0f1a16]"
        >
          <CodeRain />
          
          {/* Floating code symbols */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute left-[15%] top-[20%] opacity-20"
          >
            <Code2 className="h-16 w-16 text-primary" />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, -20, 0],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute right-[20%] top-[30%] opacity-20"
          >
            <Terminal className="h-12 w-12 text-primary" />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: 360,
              x: [0, 20, 0],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-[25%] left-[25%] opacity-20"
          >
            <Binary className="h-20 w-20 text-primary" />
          </motion.div>

          <div className="relative text-center">
            {/* Glowing background effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
            />

            {/* Main KC text */}
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              className="relative"
            >
              <h1 className="text-9xl font-bold tracking-wider">
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(16, 185, 129, 0.5)",
                      "0 0 40px rgba(16, 185, 129, 0.8)",
                      "0 0 20px rgba(16, 185, 129, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                >
                  KC
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto mt-8 h-0.5 w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            {/* Subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6"
            >
              <motion.p
                className="font-mono text-lg tracking-widest text-primary/90"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {"<"}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Portfolio
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  {" />"}
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mx-auto mt-8 w-48"
            >
              <div className="h-1 overflow-hidden rounded-full bg-primary/20">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, delay: 2 }}
                  className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
