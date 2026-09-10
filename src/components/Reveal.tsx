
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
      ) => {
        entries.forEach(
          (entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(entry.target);
            }
          },
        );
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={(element: HTMLElement | null) => {
        elementRef.current = element;
      }}
      data-visible={visible}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : "translate3d(0, 28px, 0)",
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
}
