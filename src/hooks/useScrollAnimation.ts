import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const useTypingEffect = (texts: string[], speed = 80, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting && displayText === currentText) {
      const timer = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentText.slice(0, prev.length + 1)
        );
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, speed, pause]);

  return displayText;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};
