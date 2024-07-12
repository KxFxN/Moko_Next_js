"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxSection() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef(null);
  const [isEffectComplete, setIsEffectComplete] = useState(false);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const circleScale = useTransform(
    smoothProgress,
    [0, 0.7, 1],
    [
      0,
      Math.max(windowSize.width, windowSize.height) / 100,
      Math.max(windowSize.width, windowSize.height) / 10,
    ]
  );

  const bgOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  const imageX = useTransform(
    smoothProgress,
    [0, 0.7, 1],
    [
      -windowSize.width,
      Math.max(windowSize.width, windowSize.height) / 100,
      Math.max(windowSize.width, windowSize.height) / 10,
    ]
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isEffectComplete) {
        e.preventDefault();
        const scrollPos = window.pageYOffset;
        const maxScroll = windowSize.height;
        const newProgress = Math.min(scrollPos / maxScroll, 1);
        scrollYProgress.set(newProgress);

        if (newProgress >= 1) {
          setIsEffectComplete(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEffectComplete, scrollYProgress, windowSize.height]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={sectionRef} style={{ height: "200vh" }}>
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            backgroundColor: "rgb(26,82,72)",
            opacity: bgOpacity,
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "white",
              scale: circleScale,
              x: "-50%",
              y: "-50%",
            }}
          />

          <motion.img
            src="/path-to-your-image.jpg" // แทนที่ด้วย URL ของรูปภาพของคุณ
            alt="Scrolling Image"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "300px",
              x: imageX,
            }}
          />

          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "2rem",
              opacity: useTransform(smoothProgress, [0, 0.5], [1, 0]),
            }}
          >
            Scroll เพื่อดูเอฟเฟกต์
          </motion.div>
        </motion.div>
      </div>

      {isEffectComplete && (
        <div style={{ padding: "2rem", marginTop: "100vh" }}>
          <h2>เนื้อหาถัดไป</h2>
          <p>เอฟเฟกต์เสร็จสิ้นแล้ว คุณสามารถ scroll ต่อได้</p>
        </div>
      )}
    </div>
  );
}
