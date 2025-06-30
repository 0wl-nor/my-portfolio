import React, { useRef, useState, useEffect } from "react";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 一度見えたら監視解除
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </section>
  );
}
