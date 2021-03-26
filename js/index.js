// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
    timer_1: document.getElementById("timer-1"),
    days: document.querySelector("[data-value=days]"),
    hours: document.querySelector("[data-value=hours]"),
    mins: document.querySelector("[data-value=mins]"),
    secs: document.querySelector("[data-value=secs]"),
}

class Timer {
    constructor(days,hours,mins,secs) {
        this.days = days;
        this.hours = hours;
        this.mins = mins,
        this.secs = secs
    }
    
}

const timer = {
    start() {
        const startTime = new Date('April 14, 2021');
    
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            
            const { days, hours, mins, secs } = timeCurrent(deltaTime);

            updateClockFace(timeCurrent(deltaTime))
            console.log(`${days} дней ${hours} часа ${mins} минут ${secs} секунд`);
         },1000)
    },
}

function timeCurrent(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));    
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
}

function updateClockFace({days,hours,mins,secs}) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

timer.start();
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);