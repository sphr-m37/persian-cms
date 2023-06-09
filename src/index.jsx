// components
export { Button } from './components/Button'
export { Navbar } from './components/Navbar'
export { SideBar } from './components/SideBar'
export { ErrorMsg } from './components/ErrorMsg'
export { DeleteModal } from './components/modal/DeleteModal'
export { DetailModal } from './components/modal/DetailModal'
export { EditModal } from './components/modal/EditModal'
export { ProductsList } from './components/ProductsList'
export { UsersList } from './components/UsersList'
export { AddNewItem } from './components/AddNewItem'
// pages
export { Users } from './pages/Users'
export { Orders } from './pages/Orders'
export { Products } from './pages/Products'
export { NotFound } from './pages/NotFound'
export { Discounts } from './pages/Discounts'
export { Comments } from './pages/Comments'
// routs
export { routes } from './routing/routes'
// redux
export { store } from './redux/store'
export { getProducts } from './redux/actions/productsAction'
export { getUsers } from './redux/actions/usersAction'
export { getComments } from './redux/actions/commentsAction'
export { getOrders } from './redux/actions/orderAction'
export { getDiscounts } from './redux/actions/discountAction'
export { supabase } from './supbase/supabase'
export { productsReducer } from './redux/reducers/productsReducer'
export { usersReducer } from './redux/reducers/usersReducer'
export { commentsReducer } from './redux/reducers/commentReducer'
export { orderReducer } from './redux/reducers/orderReducer'
export { discountReducer } from './redux/reducers/discountReducer'
// custom hook
export { useInput } from './hooks/useInput'
// TYPES
export {
    GET_PRODUCTS,
    GET_USERS,
    GET_COMMENTS,
    GET_ORDERS,
    GET_DISCOUNTS,
    LOADING,
    LOADED,
} from './redux/Types'