let interval;
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        button.textContent = "Rangni o'zgartirishni boshlash";
    } else {
        interval = setInterval(() => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;
        }, 2000);
        button.textContent = "Rangni o'zgartirishni to'xtatish";
    }
});