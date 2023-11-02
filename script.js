gsap.registerPlugin(CSSPlugin);

window.addEventListener('load', (event) => {
    console.log('Page fully loaded');
    // Initialization code that needs the whole page to be loaded
  });

const graphic = document.querySelector('.graphic');

// Function to move the graphic to the mouse position
function moveGraphic(e) {
  gsap.to(graphic, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
}

// Function to animate the graphic 'popping out'
function popGraphic() {
  gsap.fromTo(graphic,
    { autoAlpha: 0, scale: 0.5 },
    { autoAlpha: 1, scale: 1, duration: 0.02, ease: "back.out(4)" }
  );
  var sound = document.getElementById('popSound');
      sound.play();
}

// Add mouse move listener
document.addEventListener('mousemove', moveGraphic);

// Add click listener
document.addEventListener('click', function() {
  // Ensure the graphic is shown when it 'pops'
  graphic.style.display = 'block';

  // Run the pop animation
  popGraphic();

  // Optionally, hide the graphic after a delay
  gsap.to(graphic, { autoAlpha: 0, delay: 1, onComplete: function() { graphic.style.display = 'none'; } });
});

// Initialize the knock counter from localStorage if it exists, otherwise start at 0
let knockCounter = localStorage.getItem('knockCounter') ? parseInt(localStorage.getItem('knockCounter'), 10) : 0;
document.getElementById('knockCount').textContent = `Knocks: ${knockCounter}`;

// Function to increment the knock counter and update the display and localStorage
function incrementKnockCounter() {
  knockCounter++;
  document.getElementById('knockCount').textContent = `You have knocked on wood ${knockCounter} times`;
  localStorage.setItem('knockCounter', knockCounter.toString());
}

// Update the click listener to increment the knock counter
document.addEventListener('click', function() {
  // ... (rest of your existing click handler code)

  // Increment the knock counter
  incrementKnockCounter();
});
