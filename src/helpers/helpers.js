function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomColor() {
    const availableColors = ['yellow', 'red', 'blue', 'purple', 'green', 'pink', 'grey'];
    const index = random(availableColors.length - 1)
    return availableColors[index];
}

export function getRandomPosition() {
    const x = random(100);
    const y = random(100);
    return [x, y];
}