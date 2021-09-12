export class Quote{
    constructor(quoteData){
        this.id = quoteData._id
        this.tag = quoteData.tag
        this.content = quoteData.content
        this.author = quoteData.author
    }

    get QuoteTemplate(){
        return /*html*/ `
        <h5 class="visible"> ${this.content}</h5>
        <h6 class="hide"> ${this.author}</h6>
        `
    }
}