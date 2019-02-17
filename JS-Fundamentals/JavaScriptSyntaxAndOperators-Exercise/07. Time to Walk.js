function TimeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedForMeterInSeconds = speed / 3.6;

    let timeSecond = Math.round(distance / speedForMeterInSeconds);

    let rest = Math.floor(distance / 500);
    timeSecond += rest * 60;

    let seconds = timeSecond % 60;
    let minutes = ((timeSecond - seconds) / 60 % 60);
    let hour = Math.floor((timeSecond - seconds) / 3600);

    formatOutput(hour, minutes, seconds)

    function formatOutput(hour, minutes, seconds){
        if (hour < 10){
            hour = '0' + hour;
        }
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        if (seconds < 10){
            seconds = '0' + seconds;
        }

        console.log(`${hour}:${minutes}:${seconds}`)
    }
}

TimeToWalk(41000, 0.60, 5);