export class Clock{
    constructor(clockData){
            this.clockData = clockData
    }


    get ClockTemplate(){ 
       return /*html*/ `
       <span class="clock-time"></span>
            <span class="ampm"></span>
    
    `
}
}