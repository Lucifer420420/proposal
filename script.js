function response(answer) {
    let overlay = document.getElementById("overlay");
    let responseMessage = document.getElementById("responseMessage");

    if (answer === 'yes') {
        responseMessage.textContent = "YAY! I am so happy! I love you, Mantasha! This is just the beginning of our beautiful journey together.";
    } else {
        responseMessage.textContent = "It's okay, Mantasha! No matter what, you're still the love of my life.";
    }

    overlay.style.display = "flex";
}

function resetPage() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
