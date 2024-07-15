const squares = document.querySelectorAll('.square');
let currentIndex = 0;
let isFirstRun = true;

squares[currentIndex].style.backgroundColor = 'black';
document.querySelector("#part1").style.width = '0';
document.querySelector("#part2").style.width = '0';

function animateSquare() {
  const currentSquare = squares[currentIndex];
  const nextIndex = (currentIndex + 1) % 3; 
  const heading = document.querySelector("#para h1");
  
  const tl = gsap.timeline({
    onComplete: () => {
      currentIndex = nextIndex; 
      setTimeout(animateSquare, 3000);
    }
  });

  const scaleUpDuration = isFirstRun ? 0 : 1;

  tl.to(["#part1", "#part2"], {
      width: '50%', 
      duration: scaleUpDuration,
      ease: "power2.inOut",
    })
    .add(() => {
      currentSquare.style.backgroundColor = 'black';
    })
    .to(["#part1", "#part2"], {
      scaleX: 1,
      duration: 0,
    })
    .add(() => {
      if (currentIndex === 0) {
        heading.innerHTML = "Hello Simmi, get well soon!";
      } else if (currentIndex === 1) {
        heading.innerHTML = "Hello Aaina, get up soon!";
      } else if (currentIndex === 2) {
        heading.innerHTML = "Hello Swaraj, how are you doing?";
      } 
    })
    .to(["#part1", "#part2"], {
      scaleX: 0,
      duration: 1,
      ease: "power2.inOut",
      onStart: () => {
        squares[nextIndex].style.backgroundColor = 'black'; 
        currentSquare.style.backgroundColor = 'transparent'; 
      }
    });

  isFirstRun = false;
}

setTimeout(animateSquare, 3000);

