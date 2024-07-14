// gsap.from("#part2",{
//     // opacity:0,
//     scaleX:0,
//     duration:1,
//     delay:1,
//     ease: "power2.inOut",
//     repeat:1,
//     yoyo:true,
// })
// gsap.from("#part1",{
//     // opacity:0,
//     scaleX:0,
//     duration:1,
//     delay:1,
//     ease: "power2.inOut",
//     repeat:1,
//     yoyo:true,
// })

const squares = document.querySelectorAll('.square');
const numSquares = squares.length;
let currentIndex = 0;

const tl = gsap.timeline({ paused: true });

function animateSquare() {
  var currentSquare = squares[currentIndex];

  tl.clear();
  tl.to(currentSquare, { backgroundColor: 'black' }, 1) // Adjust duration as needed
    .from(["#part1", "#part2"], {
      // opacity: 0, // Uncomment if you want opacity animation
      scaleX: 0,
      duration: 1,
      ease: "power2.inOut",
      repeat: 1,
      yoyo: true,
    })
    .to(currentSquare, { backgroundColor: 'transparent' }, 1); // Adjust duration as needed

  currentIndex = (currentIndex + 1) % numSquares;
  tl.restart();
}

animateSquare(); // Start the initial animation
setInterval(animateSquare, 5000); // Repeat every 5 seconds

