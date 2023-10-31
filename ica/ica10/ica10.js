const button = document.getElementById("interactive-button");
const title = document.getElementById("title");

// Blue Click Box
button.addEventListener("click", () => {
  
  const content = document.querySelector(".content");
  content.style.backgroundColor = "blue";
});


// REALLY BAD CAR SALES 
title.addEventListener("mouseover", () => {
 
  title.textContent = "REALLY Bad Car Sales";
});

// Reset The Hover 
title.addEventListener("mouseout", () => {
  
  title.textContent = "Bad Car Sales";
});
