gsap.registerPlugin(CSSPlugin);

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
