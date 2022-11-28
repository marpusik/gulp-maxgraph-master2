// const circle = document.querySelector('.progress');
// const progressAnimation = () => {
//   let percentageProgress = Math.floor(98);
//   let radius = circle.getAttribute('r');
//   let circleLength = 2 * Math.PI * radius;
//   circle.setAttribute('stroke-dasharray', circleLength);
//   circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// };
// progressAnimation();
const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {
  let radius = el.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  el.querySelector('.progress').setAttribute('stroke-dasharray', circleLength);
  if (el.dataset.percentage) {
    percentageProgress = 50;
  } else {
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    el.querySelector('.progress').setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});
