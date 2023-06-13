import { usersReducer } from "./usersReducer";
import { productsReducer } from "./productsReducer";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({ users: usersReducer, products: productsReducer })