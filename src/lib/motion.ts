export const motionSettings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0.16, 1, 0.3, 1],
  sectionDuration: 0.6,
  hoverDuration: 0.2
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionSettings.sectionDuration, ease: motionSettings.easeOut }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: motionSettings.sectionDuration, ease: motionSettings.easeOut }
  }
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};