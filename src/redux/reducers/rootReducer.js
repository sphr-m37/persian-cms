import { usersReducer } from "./usersReducer";
import { productsReducer } from "./productsReducer";
import { combineReducers } from "redux";
import { commentsReducer } from "./commentReducer";
import { orderReducer } from "./orderReducer";
import { discountReducer } from "./discountReducer";

export const rootReducers = combineReducers({
    users: usersReducer,
    products: productsReducer,
    comments: commentsReducer,
    discounts: discountReducer,
    orders: orderReducer,
})