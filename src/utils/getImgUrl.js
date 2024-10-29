function getImgUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
 }
function getProjectImgUrl(name) {
    return new URL(`../assets/projectImages/${name}`, import.meta.url).href
 }

 export {getImgUrl,getProjectImgUrl};