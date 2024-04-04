
const saveStorage = (cart) => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
}
const getStorage = () => {
    if (typeof window !== 'undefined') {      
        return localStorage?.getItem('shopping-cart') ? JSON.parse(localStorage?.getItem('shopping-cart')) : [];
    }
}
// const getStorage = () => {
//     if (typeof window !== 'undefined') {
//         const item = localStorage.getItem('shopping-cart');
//         return item ? JSON.parse(item) : [];
//     }
// }
export {saveStorage, getStorage}