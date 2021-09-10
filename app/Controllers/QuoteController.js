import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


//private
function _drawQuote(){
    let quote = ((ProxyState.quote.content) + (ProxyState.quote.author));
    let quotesTemplate = ''
    if (ProxyState.quote){
        quotesTemplate = ProxyState.quote.QuoteTemplate
    }
    document.getElementById('quote').innerHTML = quotesTemplate
}


export class QuoteController {
    constructor(){
        ProxyState.on("quote", _drawQuote)
        console.log("this is from the quote controller")
        quoteService.getRandomQuote()

    }
}
