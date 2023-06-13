// components
export { Button } from './components/Button'
export { Navbar } from './components/Navbar'
export { SideBar } from './components/SideBar'
export { ErrorMsg } from './components/ErrorMsg'
export { DeleteModal } from './components/modal/DeleteModal'
export { DetailModal } from './components/modal/DetailModal'
export { ProductsList } from './components/Product/ProductsList'
export { AddNewProduct } from './components/Product/AddNewProduct'

// pages
export { Users } from './pages/Users'
export { Orders } from './pages/Orders'
export { Products } from './pages/Products'
export { Comments } from './pages/Comments'
export { NotFound } from './pages/NotFound'
export { Discounts } from './pages/Discounts'
// routs
export { routes } from './routing/routes'
// redux
export { store } from './redux/store'
export { productsReducer } from './redux/reducers/productsReducer'
export { getProducts } from './redux/actions/productsAction'

export {usersReducer} from './redux/reducers/usersReducer'