/**
 * Biblioteca de Animações para Enavo Gotas
 * Animações otimizadas para Framer Motion com foco em performance e UX médica
 * 
 * Princípios:
 * - Sutileza: animações discretas que não distraem do conteúdo médico
 * - Performance: usa transform e opacity (GPU-accelerated)
 * - Acessibilidade: respeita prefers-reduced-motion
 */

import { Variants } from 'framer-motion';

/**
 * Duração padrão das animações
 * Baseado em Material Design e guidelines de UX médica
 */
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
} as const;

/**
 * Easing functions para animações naturais
 */
export const EASING = {
  easeOut: [0.16, 1, 0.3, 1], // Suave e natural
  easeInOut: [0.43, 0.13, 0.23, 0.96], // Balanceado
  spring: { type: 'spring', stiffness: 100, damping: 15 }, // Elástico sutil
} as const;

/**
 * Fade In + Move Up
 * Animação padrão para entrada de seções
 * Uso: Introduction, Guidelines, Calculator
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade In sem movimento
 * Para elementos que não devem se mover (ex: modals, overlays)
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

/**
 * Fade In + Move Down
 * Usado para elementos que vêm de cima (ex: headers, notificações)
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade In + Move Left
 * Usado para elementos que entram da direita
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade In + Move Right
 * Usado para elementos que entram da esquerda
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Scale In (Zoom)
 * Usado para elementos importantes que merecem atenção (ex: resultados da calculadora)
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Scale In com bounce sutil
 * Para celebrar ações bem-sucedidas (ex: cálculo concluído)
 */
export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      duration: ANIMATION_DURATIONS.slow,
    },
  },
};

/**
 * Slide Up (para modals e bottom sheets)
 */
export const slideUp: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

/**
 * Stagger Container
 * Anima filhos em sequência (efeito cascata)
 * Uso: listas de cards, features, guidelines
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms entre cada filho
      delayChildren: 0.05, // Delay antes de começar
    },
  },
};

/**
 * Stagger rápido
 * Para muitos elementos pequenos
 */
export const staggerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/**
 * Stagger lento
 * Para elementos grandes e importantes
 */
export const staggerSlow: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Item de lista (usado com staggerContainer)
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

/**
 * Expand (para accordions e collapsibles)
 */
export const expand: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

/**
 * Rotate (para ícones de accordion, chevrons)
 */
export const rotate180: Variants = {
  initial: {
    rotate: 0,
  },
  rotated: {
    rotate: 180,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

/**
 * Pulse (para chamar atenção)
 * Uso: badges "novo", notificações, CTAs importantes
 */
export const pulse: Variants = {
  initial: {
    scale: 1,
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Shake (para erros e validações)
 */
export const shake: Variants = {
  initial: {
    x: 0,
  },
  shake: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Hover Lift (para cards interativos)
 * Uso: medical-card-hover
 */
export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Loading Spinner (para estados de carregamento)
 */
export const spinner: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Success Check (animação de ✓ para confirmações)
 */
export const successCheck: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.5, ease: 'easeInOut' },
      opacity: { duration: 0.2 },
    },
  },
};

/**
 * Progress Bar (para indicadores de progresso)
 */
export const progressBar = (progress: number): Variants => ({
  initial: {
    width: '0%',
  },
  animate: {
    width: `${progress}%`,
    transition: {
      duration: 0.8,
      ease: EASING.easeOut,
    },
  },
});

/**
 * Notification (para toasts e alertas)
 */
export const notification: Variants = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    x: 400,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
};

/**
 * Modal Overlay (backdrop)
 */
export const modalOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

/**
 * Modal Content
 */
export const modalContent: Variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    y: 20,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

/**
 * Counter (para números que incrementam)
 * Uso: UsageCounter
 */
export const counterUp = (from: number, to: number) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
});

/**
 * Page Transition (para react-router)
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
    },
  },
};

/**
 * Utility: Respeita preferência do usuário por animações reduzidas
 */
export const getReducedMotionVariants = (variants: Variants): Variants => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Remove todas as animações, mantém apenas opacity
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } },
    };
  }
  return variants;
};

/**
 * Preset de viewport para Intersection Observer
 * Usado em whileInView do Framer Motion
 */
export const viewportConfig = {
  once: true, // Anima apenas uma vez
  amount: 0.2, // 20% do elemento visível para disparar
  margin: '-50px', // Offset para disparar antes/depois
};

export default {
  fadeInUp,
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInBounce,
  slideUp,
  staggerContainer,
  staggerFast,
  staggerSlow,
  staggerItem,
  expand,
  rotate180,
  pulse,
  shake,
  hoverLift,
  spinner,
  successCheck,
  progressBar,
  notification,
  modalOverlay,
  modalContent,
  counterUp,
  pageTransition,
  viewportConfig,
  getReducedMotionVariants,
};
