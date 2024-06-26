
const saveStorage = (cart) => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
}
const getStorage = () => {
    if (typeof window !== 'undefined') {      
        return localStorage?.getItem('shopping-cart') ? JSON.parse(localStorage?.getItem('shopping-cart')) : [];
    }
}
export {saveStorage, getStorage}