const imagePaths = [
    '/img/dad1.jpg',
    '/img/dad2.jpg',
    '/img/dad3.jpg',
    '/img/dad4.jpg',
    '/img/dad5.jpg'
];

let prevImageIndex = -1;

function getRandomIndex(array) {
    let randomIndex;

    if (array.length > 1) {
        randomIndex = Math.floor(Math.random() * array.length);
        while (randomIndex === prevImageIndex) {
            randomIndex = Math.floor(Math.random() * array.length);
        }
    } else {
        randomIndex = prevImageIndex === 0 ? 1 : 0;
    }

    prevImageIndex = randomIndex;
    return randomIndex;
}

document.getElementById('js-new-joke').addEventListener('click', function() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('js-quote-text').innerText = data.joke;
        
        const randomImagePath = imagePaths[getRandomIndex(imagePaths)];
        document.getElementById('random-image').src = randomImagePath;
    })
    .catch(error => console.error('Error fetching joke:', error));
});

document.getElementById('js-new-joke').click(); 
