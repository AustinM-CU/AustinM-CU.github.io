const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function random2(number) {
    return Math.random() * number;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 500; i++) {
        ctx.beginPath();
        let red = random(50);
        let green = random(50);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(20),
            0,
            2 * Math.PI
        );
        ctx.fill();
    }

    ctx.font = "5em Helvetica, sans-serif";
    ctx.fillStyle = "rgb(12, 12, 76)";
    ctx.textAlign = "center";
    ctx.fillText("I Prefer Blue", canvas.width / 2, canvas.height / 2);
}

btn.addEventListener("click", draw);
