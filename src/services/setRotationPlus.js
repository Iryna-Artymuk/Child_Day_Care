export   const setRotationPlus = () => {
  const deg = Math.random() * (10 - -10) + -10;
  return 'rotate(' + deg + 'deg)';
};
