import React, { useEffect, useRef, useState } from "react";
import Layout from "../ui/Layout";
import SectionHeading from "../ui/SectionHeading";
import { slides } from "../../utils/data";

const PlantsCollection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const autoRef = useRef(null);
  const total = slides.length;

  const goTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + total) % total);
      setAnimating(false);
    }, 400);
  };

  const prev = () => goTo(current - 1, "prev");
  const next = () => goTo(current + 1, "next");

  useEffect(() => {
    autoRef.current = setInterval(() => next(), 5000);
    return () => clearInterval(autoRef.current);
  }, [current]);

  const slide = slides[current];
  return (
    <Layout className="bg-[#1B2316] pb-24">
      <SectionHeading label={"Our Best o2"} />
      {/* Card */}
      <div
        className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md
                border border-white/10 md:grid-cols-[1.05fr_0.95fr] mt-10"
      >
        {/* Image Side */}
        <div className="relative min-h-[300px] max-h-[400px] overflow-hidden">
          <img
            src={slide.image}
            alt="Plant"
            className={`block h-full w-full object-contain object-center transition-all duration-500 ${
              animating ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/55">
            Indoor Serenity
          </div>

          <h2
            className={`mb-4 font-serif text-[1.35rem] font-bold leading-snug text-[#f5efe9] transition-all duration-350 sm:text-[1.6rem] ${
              animating
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {slide.title}
          </h2>

          <p
            className={`mb-3 text-sm leading-relaxed text-white/55 transition-opacity duration-350 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            {slide.desc1}
          </p>

          <p
            className={`text-sm leading-relaxed text-white/55 transition-opacity duration-350 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            {slide.desc2}
          </p>

          <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button className="w-fit rounded-full border border-white/20 bg-transparent px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white">
              Explore
            </button>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className="text-[0.7rem] uppercase tracking-[0.35em] text-white/30">
                <span className="font-semibold text-white/80">
                  {String(current + 1).padStart(2, "0")}
                </span>
                /{String(total).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-[5px] rounded-full border-none transition-all duration-300 ${
              i === current ? "w-8 bg-white/75" : "w-5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PlantsCollection;
