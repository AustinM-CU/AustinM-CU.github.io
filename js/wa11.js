const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const images = ["/img/a1.jpg",
                "/img/a2.jpg",
                "/img/a3.jpg",
                "/img/a4.jpg",
                "/img/a5.jpg"]
/* Declaring the alternative text for each image file */
const altText = {
    "image1": "A persons eye",
    "image2": "just a rock",
    "image3": "flowers",
    "image4": "old painting",
    "image5": "butterfly"

}

/* Looping through images */
for (let i = 0; i<5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);

function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
    newImage.addEventListener("click", displayImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class")== "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5";
    }
    else if (btn.getAttribute("class")== "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0";
    }
    }
)