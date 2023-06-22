import { usersReducer } from "./usersReducer";
import { productsReducer } from "./productsReducer";
import { combineReducers } from "redux";
import { commentsReducer } from "./commentReducer";

export const rootReducers = combineReducers({ users: usersReducer, products: productsReducer,comments:commentsReducer })