document.addEventListener('DOMContentLoaded', function () {
    const hoursHand = document.getElementById('hours');
    const minutesHand = document.getElementById('minutes');
    const secondsHand = document.getElementById('seconds');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hoursDegrees = (hours * 30) + (0.5 * minutes); // Each hour is 30 degrees, and each minute adds 0.5 degrees.
        const minutesDegrees = (minutes * 6) + (0.1 * seconds); // Each minute is 6 degrees, and each second adds 0.1 degrees.
        const secondsDegrees = seconds * 6; // Each second is 6 degrees.

        rotateHand(hoursHand, hoursDegrees);
        rotateHand(minutesHand, minutesDegrees);
        rotateHand(secondsHand, secondsDegrees);
    }

    function rotateHand(hand, degrees) {
        hand.style.transform = `rotate(${degrees}deg)`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
});
