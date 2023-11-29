document.addEventListener('DOMContentLoaded', function () {
    const numRectangles = 10;

    let canvasContainer = document.getElementById('canvasContainer');
    if (!canvasContainer) {
        canvasContainer = document.createElement('div');
        canvasContainer.id = 'canvasContainer';
        document.body.appendChild(canvasContainer);
    }

    let percentageListContainer = document.getElementById('percentageContainer');
    if (!percentageListContainer) {
        percentageListContainer = document.createElement('ul');
        percentageListContainer.id = 'percentageContainer';
        document.body.appendChild(percentageListContainer);
    }

    let phoneDisplay = document.getElementById('phoneDisplay');
    if (!phoneDisplay) {
        phoneDisplay = document.createElement('div');
        phoneDisplay.id = 'phoneDisplay';
        document.body.appendChild(phoneDisplay);
    }

    const percentageList = new Array(numRectangles).fill(0);

    for (let i = 1; i <= numRectangles; i++) {
        const { percentageDisplay } = createCanvasAndDisplays(`drawCanvas${i}`, canvasContainer, i - 1);
        percentageList[i - 1] = percentageDisplay;
    }

    // Initialize the phone number display
    updatePhoneNumber();

    function createCanvasAndDisplays(canvasId, container, index) {
        const canvas = document.createElement('canvas');
        canvas.id = canvasId;
        canvas.width = 600 / numRectangles;
        canvas.height = 300;
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#ccc';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        let isDrawing = false;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const totalPixels = canvas.width * canvas.height;

        const percentageDisplay = document.createElement('div');
        percentageListContainer.appendChild(percentageDisplay);

        canvas.addEventListener('mousedown', function (event) {
            isDrawing = true;
            draw(canvas, event.clientX, event.clientY, imageData.data, totalPixels, percentageDisplay, index);
        });

        canvas.addEventListener('mousemove', function (event) {
            if (isDrawing) {
                draw(canvas, event.clientX, event.clientY, imageData.data, totalPixels, percentageDisplay, index);
            }
        });

        canvas.addEventListener('mouseup', function () {
            isDrawing = false;
            updatePhoneNumber();
        });

        canvas.addEventListener('mouseleave', function () {
            isDrawing = false;
            updatePhoneNumber();
        });

        return { percentageDisplay };
    }

    function draw(canvas, x, y, imageData, totalPixels, percentageDisplay, index) {
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect(); // Get the bounding rectangle of the canvas

        // Canvas coordinates
        const canvasX = (x - rect.left) / rect.width * canvas.width;
        const canvasY = (y - rect.top) / rect.height * canvas.height;

        //Make the circle
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 10, 0, 2 * Math.PI);
        ctx.fill();

        const updatedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        let filledPixels = 0;
        for (let i = 0; i < totalPixels * 4; i += 4) {
            if (updatedImageData.data[i + 3] !== 0) {
                filledPixels++;
            }
        }

        const percentageDrawn = Math.round((filledPixels / totalPixels) * 100);
        percentageDisplay.textContent = `${percentageDrawn}%`;
    }

    function updatePhoneNumber() {
        // Calculate the phone number based on the percentages of all canvases
        const phoneNumber = percentageList.map(percentage => {
            const percentageValue = parseInt(percentage.textContent, 10);
            if (isNaN(percentageValue)) {
                return 'X';
            } else {
                // Rounding Logic 
                if (percentageValue === 100) {
                    return '0';
                } else if (percentageValue >= 1 && percentageValue <= 19) {
                    return 1;
                } else if (percentageValue >= 20 && percentageValue <= 29) {
                    return 2;
                } else if (percentageValue >= 30 && percentageValue <= 39) {
                    return 3;
                } else if (percentageValue >= 40 && percentageValue <= 49) {
                    return 4;
                } else if (percentageValue >= 50 && percentageValue <= 59) {
                    return 5;
                } else if (percentageValue >= 60 && percentageValue <= 69) {
                    return 6;
                } else if (percentageValue >= 70 && percentageValue <= 79) {
                    return 7;
                } else if (percentageValue >= 80 && percentageValue <= 89) {
                    return 8;
                } else if (percentageValue >= 90 && percentageValue <= 99) {
                    return 9;
                }
            
                // Normal rounding for other cases
                return Math.round(percentageValue / 10);
            }
            
        }).join('');

        // Display the formatted phone number
        phoneDisplay.textContent = formatPhoneNumber(phoneNumber);
    }

    function formatPhoneNumber(number) {
        if (number === 'X') {
            return 'XXX-XXX-XXX';
        }

        const str = number.toString().padStart(10, '0');
        return `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;
    }
});
