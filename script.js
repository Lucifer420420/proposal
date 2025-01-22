function response(answer) {
    let overlay = document.getElementById("overlay");
    let responseMessage = document.getElementById("responseMessage");

    if (answer === 'yes') {
        responseMessage.textContent = "YAY! I am so happy! I love you, Buggu!";
    } else {
        responseMessage.textContent = "It's okay, Buggu! You're still my everything!";
    }

    overlay.style.display = "flex";
}

function resetPage() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}