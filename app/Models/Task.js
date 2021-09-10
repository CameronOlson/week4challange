import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(taskData) {
        this.id = generateId()
        this.description = taskData.description
        this.completed = taskData.completed

    }

    get TaskTemplate(){
        return /*html*/`

        <div class="card selectable"><span class="my-1"><li>${this.description}</li></span></div>
        `
    }
}