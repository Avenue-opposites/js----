//定义随机颜色类
class RondomColor {
    constructor() {

    }
    //第一种方法 rgb(255,255,255) 0~255
    rgb() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    };
    //第一种方法 rgba(255,255,255,1) 0~255 0~1
    rgba() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let a = `${Math.random()}`.slice(0,3);
        return `rgb(${r},${g},${b},${a})`;
    };
    sixteenBase() {
        return `#${Math.random().toString(16).slice(2,8)}`
    };
    hsl() {
        //色相
        let h = Math.floor(Math.random() * 361);
        //饱和度
        let s = Math.floor(Math.random() * 101);
        //明度
        let l = Math.floor(Math.random() * 101);
        return `hsl(${h},${s}%,${l}%)`;
    };
    hsla() {
        //色相
        let h = Math.floor(Math.random() * 361);
        //饱和度
        let s = Math.floor(Math.random() * 101);
        //明度
        let l = Math.floor(Math.random() * 101);
        //透明度
        let a = `${Math.random()}`.slice(0,3);
        return `hsl(${h},${s}%,${l}%,${a})`;
    };
    hwb() {
        //色相
        let h = Math.floor(Math.random() * 361);
        let w = Math.floor(Math.random() * 101);
        let b = 100 - w;
        return `hwb(${h},${w}%,${b}%)`;
    }
    cmyk() {
        let c = Math.floor(Math.random() * 101);
        let m = Math.floor(Math.random() * 101);
        let y = Math.floor(Math.random() * 101);
        let k = Math.floor(Math.random() * 101);
        return `cmyk(${c},${m},${y},${k})`;
    }
};
const color = new RondomColor();
document.getElementById("container").style.background = color.hsl();
