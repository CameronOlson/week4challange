export class Quote{
    constructor(quoteData){
        this.id = quoteData._id
        this.tag = quoteData.tag
        this.content = quoteData.content
        this.author = quoteData.author
    }

    get QuoteTemplate(){
        return /*html*/ `
        <div>Quote of The Day ${this.content} ${this.author}</div>
        `
    }
}