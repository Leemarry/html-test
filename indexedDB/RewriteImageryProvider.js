
import { ImageryProvider } from "cesium"
 
class RewriteImageryProvider {
    _tiles = []
    constructor() {
        this.init()
    }
    init() {
        // 将 loadImage 重载
        ImageryProvider.loadImage = (imageryProvider, url) => {
            // 其余情况，采用传统的加载图片的方式
            return new Promise((resolve, reject) => {
                const imgUrl = url.url
                const img = new Image()
                img.src = imgUrl
                img.crossOrigin = "Anonymous"
 
                // 图片加载成功了，进行 reslove
                img.onload = () => {
                    if (img.src.indexOf("Textures/NaturalEarthII") < 0) {
                        this._tiles.push(img.src)
                    }
                    resolve(img)
                }
                // 图片未加载成功
                img.onerror = (err) => {
                    console.error("图片：【" + imgUrl + "】加载失败！")
                    reject(err)
                }
            })
        }
    }
    getTiles() {
        return Array.from(new Set(this._tiles))
    }
}
 
export default RewriteImageryProvider