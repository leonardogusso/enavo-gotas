import React from 'react';
import { useInView } from 'react-intersection-observer';

export function FadeInSection(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece apenas uma vez
    threshold: 0.1, // A animação começa quando 10% do elemento está visível
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {props.children}
    </div>
  );
}
