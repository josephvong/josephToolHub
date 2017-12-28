// 简单输出当前 移动端 平台名
function mobPlatForm() {
    var a = window.navigator.userAgent.toLowerCase();
    var b = a.match(/(iphone|ipod|ipad|android|windows phone|blackberry|symbian|Windows Phone)/);
    if (!!b) {
        b = b.toString();
    }
    if (b) {
        if (b.indexOf("iphone") >= 0) {
            return "iphone"
        } else if (b.indexOf("ipod") >= 0) {
            return "ipod"
        } else if (b.indexOf("ipad") >= 0) {
            return "ipad"
        } else if (b.indexOf("android") >= 0) {
            return "android"
        } else if (b.indexOf("windows phone") >= 0) {
            return "wp7"
        } else if (b.indexOf("symbian") >= 0) {
            return "symbian"
        } else if (b.indexOf("blackberry") >= 0) {
            return "blackberry"
        } else if (b.indexOf("Windows Phone") >= 0) {
            return "wp7"
        } else {
            return "unknow"
        }
    }
    return "unknow"
}

export default mobPlatForm