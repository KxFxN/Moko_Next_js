"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
  keyframes,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useScrolling } from "./ScrollProvider";
import { delay } from "lodash";

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
          if (progress <= 0.2) {
            setNavbarBg(false);
            setFontColor(false);
          }

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

  const handRightX = useTransform(smoothProgress, [0, 0.4, 1], [500, 20, 20]);

  const backgroundScale = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    [0, 15, 15]
  );

  const textOpacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  const textY = useTransform(smoothProgress, [0.3, 0.4], [-200, -230]);

  const treeOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);

  const treeleftX = useTransform(smoothProgress, [0, 0.4, 1], [140, 70, 70]);

  const treeRightX = useTransform(smoothProgress, [0, 0.4, 1], [0, 100, 100]);
  const treeRightY = useTransform(smoothProgress, [0, 0.4, 1], [10, 0, 0]);
  const treeRotation = useTransform(smoothProgress, [0, 0.4, 1], [0, 5, 5]);

  const imageBrightness = useTransform(
    smoothProgress,
    [0, 0.2, 1],
    [0.3, 1, 1]
  );

  const backgroundGradient = useTransform(
    smoothProgress,
    [0, 0.2, 0.4],
    [
      "linear-gradient(to bottom, rgb(26,82,72) 10%, rgb(27,106,127) 30%, rgb(28,139,200) 90%)",
      "linear-gradient(to bottom, rgb(52,134,255) 10%, rgb(52,134,255) 30%, rgb(164,136,255) 90%)",
      "linear-gradient(to bottom, rgb(164,136,255) 10%, rgb(164,136,255) 30%, rgb(255,189,207) 90%)",
    ]
  );

  const starVariantsLarge = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 0.8, 0.6, 0.4, 0.2, 0.4, 0.6, 0.8, 1],
      transition: {
        duration: 6,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  };

  const starVariantsSmall = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1],
      transition: {
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        delay: 4,
      },
    },
  };

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

          <motion.div
            className="absolute top-1/2 -translate-y-[20%] right-1/2 translate-x-1/2 z-30 w-[35%] md:w-[30%] md:-translate-y-[35%] lg:w-[25%] lg:-translate-y-[30%] xl:w-[15%]"
            style={{
              filter: useTransform(
                imageBrightness,
                (brightness) => `brightness(${brightness})`
              ),
            }}
          >
            <Image
              src={"/image/hero/Moko-product.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            className="absolute z-20 w-[20%] top-[41%] right-[50%] md:top-[35%] md:right-[40%] lg:w-[15%] lg:top-[38%] lg:right-[42%] xl:w-[9%] xl:top-[35%] xl:right-[45%] 2xl:top-[30%] 2xl:right-[42%]"
            style={{
              rotate: treeRotation,
              x: treeRightX,
              y: treeRightY,
              opacity: treeOpacity,
            }}
          >
            <Image
              src={"/image/hero/tree-h.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            className="absolute z-20 w-[20%] top-[59%] left-[8%] md:top-[53%] md:left-[20%] lg:w-[15%] lg:top-[55%] lg:left-[25%] xl:w-[9%] xl:top-[57%] xl:left-[35%] 2xl:top-[60%] 2xl:left-[37%]"
            style={{
              rotate: treeRotation,
              x: treeleftX,
              opacity: treeOpacity,
            }}
          >
            <Image
              src={"/image/hero/tree-l.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            variants={starVariantsLarge}
            initial="initial"
            animate="animate"
            key={"top-left-1"}
            className="absolute z-20 w-[8%] top-[43%] left-[25%] md:top-[33%] md:left-[28%] lg:w-[4%] lg:top-[38%] lg:left-[33%] xl:top-[35%] xl:left-[39%] 2xl:top-[30%]"
            style={{ transformOrigin: "center", opacity: textOpacity }}
          >
            <Image
              src={"/image/hero/star-h.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            variants={starVariantsSmall}
            initial="initial"
            animate="animate"
            key={"top-left-2"}
            className="absolute w-[4%] top-[47%] left-[31%] z-20 md:top-[38%] md:left-[35%] lg:w-[2%] lg:top-[43%] lg:left-[38%] xl:top-[39%] xl:left-[42%]  2xl:top-[35%]"
            style={{ transformOrigin: "center", opacity: textOpacity }}
          >
            <Image
              src={"/image/hero/star-l.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            variants={starVariantsLarge}
            initial="initial"
            animate="animate"
            key={"bottom-right-1"}
            className="absolute z-30 w-[8%] top-[73%] right-[35%] md:top-[68%] md:right-[38%] lg:w-[4%] lg:right-[41%] xl:top-[70%] xl:left-[52%] 2xl:top-[75%]"
            style={{ transformOrigin: "center", opacity: textOpacity }}
          >
            <Image
              src={"/image/hero/star-h.png"}
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            variants={starVariantsLarge}
            initial="initial"
            animate="animate"
            key={"bottom-right-2"}
            className="absolute w-[4%] top-[77%] right-[33%] md:top-[73%] md:right-[36%] lg:w-[2%] lg:top-[72%] lg:right-[37%] xl:top-[75%] xl:left-[55%] 2xl:top-[80%] z-30"
            style={{ transformOrigin: "center", opacity: textOpacity }}
          >
            <Image
              src={"/image/hero/star-l.png"}
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
