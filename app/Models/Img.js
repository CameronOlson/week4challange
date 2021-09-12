export class Img{
    constructor(imgData){
        this.large = imgData.largeImgUrl
    }

    get ImgTemplate(){
        return
        // return/*html*/`
        // <img src="${this.large}" alt="">
        // `
    }
}