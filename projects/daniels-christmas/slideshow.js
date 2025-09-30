let idx = 0;

function move(di) {
  idx += di;
  
  // Get slides.
  let slides = document.getElementsByClassName('slide');
  
  // Keep index in bounds.
  if (idx > slides.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = slides.length - 1;
  }
  
  // Make all slides invisible.
  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show current slide.
  slides[idx].style.display = "block";
}