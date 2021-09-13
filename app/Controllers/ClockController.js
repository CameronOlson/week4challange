import { ProxyState } from "../AppState.js";

export class ClockController{
    constructor(element){
        this.element = element
    }

    start() {
        setInterval(() => {
            this.update(); 
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0"); 
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "a.m" : "p.m" ;
        console.log(timeFormatted);

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;

    }

getTimeParts() {
    const now = new Date();
    return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
    }
}

}

const clockElement = document.querySelector(".clock");
const clockObject = new ClockController(clockElement);
clockObject.start()
console.log(clockObject.getTimeParts());