import { getStorage, saveStorage } from "@/utils/localstorage";
import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_FROM_CART, CLEAR_CART } from "./actionType";
import toast from "react-hot-toast";
import { state, CartItem } from "../../intefaces";
const initialState = {
    cart: getStorage()
}

const cartReducer = (state: state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            const hasProduct = state.cart.find((p: CartItem) => p.id === action.payload.product.id) ? true : false;
            state.cart = hasProduct ? state.cart.map((p: CartItem) => p.id === action.payload.product.id ? { ...p, qty: p.qty + 1 } : p) : [...state.cart, { ...action.payload.product, qty: action.payload.qty }];
            saveStorage(state.cart)
            toast.success(`${action.payload.product.name} به سبد خرید اضافه شد`)
            return {
                ...state,
                cart: state.cart
            }
        case INCREMENT:
            state.cart = state.cart.map((p: CartItem) => p.id === action.payload ? { ...p, qty: p.qty + 1 } : p);
            saveStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case DECREMENT:
            state.cart = state.cart.map((p: CartItem) => p.id === action.payload ? { ...p, qty: p.qty - 1 } : p);
            saveStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case REMOVE_FROM_CART:
            state.cart = state.cart.filter((p: CartItem) => p.id !== action.payload)
            saveStorage(state.cart)
            // toast.warning("محصول از سبد خرید حذف شد!")
            return {
                ...state,
                cart: state.cart
            }
        case CLEAR_CART:
            saveStorage([])
            toast.error("سبد خرید شما خالی شد!")
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}
export default cartReducer;

// export function totalAmountCart({ shoppingCart }:any) {
//     return shoppingCart.cart.reduce((total: number, product: any) => {
//         return product.is_sale ? (total + product.sale_price * product.qty) : (total + product.price * product.qty)
//     }, 0)
// }