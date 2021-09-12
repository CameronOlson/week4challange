import { ProxyState } from "../AppState.js";
import { Img } from "../Models/Img.js";

const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImgService {
    async getImg() {
        let res = await api.get('')
        ProxyState.image = new Img(res.data)
        console.log('this is the image', res.data.largeImgUrl);
        console.log(ProxyState.image)
    }
}

export const imgService = new ImgService();