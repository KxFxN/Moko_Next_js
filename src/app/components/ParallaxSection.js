"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useScrolling } from "./ScrollProvider";

const ParallaxSection = () => {
  const [isEffectComplete, setIsEffectComplete] = useState(false);
  const { setNavbarBg, setFontColor } = useScrolling();
  const [isScrollProgressMaxed, setIsScrollProgressMaxed] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    container: typeof window !== "undefined" ? window : undefined,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY - sectionTop;
        const progress = Math.min(
          Math.max(scrollPosition / sectionHeight, 0),
          1
        );

        if (!isScrollProgressMaxed) {
          if (progress >= 0.2) {
            setFontColor(true);
          }
          if (progress >= 0.5) {
            setIsEffectComplete(true);
            setNavbarBg(true);
          }

          if (progress >= 0.7) {
            setIsScrollProgressMaxed(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEffectComplete]);

  const vectorLeftX = useTransform(
    smoothProgress,
    [0.3, 0.4, 1],
    [-505, -20, -20]
  );

  const vectorRightX = useTransform(smoothProgress, [0.3, 0.4, 1], [500, 0, 0]);

  const handLeftX = useTransform(smoothProgress, [0, 0.4, 1], [-505, -20, -20]);

  const handRightX = useTransform(smoothProgress, [0, 0.4, 1], [500, 0, 0]);

  const backgroundScale = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    [0, 15, 15]
  );

  const textOpacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  const textY = useTransform(smoothProgress, [0.3, 0.4], [-200, -230]);

  const backgroundGradient = useTransform(
    smoothProgress,
    [0, 0.2, 0.4],
    [
      "linear-gradient(to bottom, rgb(26,82,72) 10%, rgb(27,106,127) 30%, rgb(28,139,200) 90%)",
      "linear-gradient(to bottom, rgb(52,134,255) 10%, rgb(52,134,255) 30%, rgb(164,136,255) 90%)",
      "linear-gradient(to bottom, rgb(164,136,255) 10%, rgb(164,136,255) 30%, rgb(255,189,207) 90%)",
    ]
  );

  return (
    <div id="moko" ref={sectionRef} className={`relative h-[200vh]`}>
      <motion.div
        className="sticky margin-custom top-0 h-screen overflow-hidden"
        style={{ background: backgroundGradient }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute left-0 top-0 z-20 w-[40%] md:w-[35%] lg:w-[30%]"
            style={{
              x: vectorLeftX,
              y: 60,
            }}
          >
            <Image
              src={"/image/hero/Vector1.png"}
              alt=" "
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-0 z-20 w-[40%] md:w-[35%] lg:w-[30%] 2xl:w-fit"
            style={{
              x: vectorRightX,
              y: 60,
            }}
          >
            <Image
              src={"/image/hero/Vector.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            className="absolute left-0 top-1/2 translate-y-[20%] z-20 w-[40%] md:-translate-y-[60%] lg:w-[35%] lg:-translate-y-[30%]"
            style={{ x: handLeftX }}
          >
            <Image
              src={"/image/hero/hands-l.png"}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 translate-y-[20%] z-20 w-[40%] md:-translate-y-[60%] lg:w-[35%] lg:-translate-y-[30%]"
            style={{ x: handRightX }}
          >
            <Image
              src={"/image/hero/hands-r.png"}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              width: "10vmax",
              height: "10vmax",
              borderRadius: "50%",
              backgroundColor: "#F2FCF7",
              scale: backgroundScale,
              x: "-50%",
              y: "-50%",
              zIndex: 1,
            }}
          />

          <motion.div className="absolute top-1/2 -translate-y-[20%] right-1/2 translate-x-1/2 z-20 w-[40%] md:w-[35%] md:-translate-y-1/2 lg:w-[25%] lg:-translate-y-[30%] xl:w-[20%]">
            <Image
              src={"/image/hero/Moko-product.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              opacity: textOpacity,
              y: textY,
            }}
          >
            <motion.div className="absolute flex flex-col items-center text-center gap-5 pt-5 text-[#629C85] top-[45%] md:pt-10 md:top-[35%] 2xl:top-[30%]">
              <h1 className="md:hidden">
                MOKO <br /> Ink Restore+
              </h1>
              <h1 className="hidden md:flex">MOKO Ink Restore+</h1>
              <p className="md:hidden lg:text-lg 2xl:text-2xl">
                ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแล
                <br />
                รอยสักโดยเฉพาะ
                <br />
                และคืนความอ่อนเยาว์ด้วยส่วนผสม
                <br />
                อันเป็นเอกลักษณ์เฉพาะตัว
                <br />
                และยังช่วยลดการระคายเคืองผิว
                <br />
                ที่เกิดจากกระบวนการสัก
              </p>
              <p className="hidden md:flex lg:text-lg 2xl:text-2xl">
                ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ
                <br />
                และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว
                <br />
                และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
