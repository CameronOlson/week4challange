import { ProxyState } from "../AppState.js";
import { imgService } from "../Services/ImgService.js";

function _drawImg(){
    // let imgTemplate = ''
    // if(ProxyState.image){
    //    imgTemplate = ProxyState.image.ImgTemplate
    // }
    document.getElementById('background-image').style.backgroundImage =`url("${ProxyState.image.large}")`
    // console.log('made it to the draw function')
    // document.getElementById('background-image').style.backgroundImage =`url('${ProxyState.image.largeImgUrl}')`

}

export class ImgController {
    constructor(){
        ProxyState.on("image", _drawImg)
        console.log('this is from the ImgController')
        imgService.getImg()
    }
    // async getImg(){
    //     try {imgService
    //         imgService.getImg()
    //     } catch (error) {
    //         console.log("error from the Img controller")
            
    //     }
    // }
}