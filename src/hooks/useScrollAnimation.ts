import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation — Intersection Observer orqali scroll animatsiyalarini boshqaradi.
 * Element ekranga kirganda `animate-visible` class qo'shiladi.
 *
 * @param threshold — Element qanchalik ko'rinishi kerak (0–1). Default: 0.15
 * @param rootMargin — Observer margin. Default: '0px 0px -60px 0px'
 */
export function useScrollAnimation(
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px'
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * useChildrenAnimation — Parent element ichidagi `.anim-child` class li
 * elementlarni ketma-ket (stagger) animatsiya qiladi.
 */
export function useChildrenAnimation(
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px'
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll<HTMLElement>('.anim-child'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
            setTimeout(() => {
              el.classList.add('animate-visible');
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    children.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
