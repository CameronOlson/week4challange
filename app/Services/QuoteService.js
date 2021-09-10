import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";

const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
  })
  
  class QuoteService {
    async getRandomQuote() {
  
      let res = await api.get('')
      ProxyState.quote = new Quote(res.data)
      // ProxyState.quote = res.data.content
      console.log('random quote', res.data.content);

    //   ProxyState.quote = res.data.map
        }
    }

    export const quoteService = new QuoteService();