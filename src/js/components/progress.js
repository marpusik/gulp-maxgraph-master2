const circle = document.querySelector('.progress');
const progressAnimation = () => {
  let percentageProgress = Math.floor(98);
  let radius = circle.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
};
progressAnimation();