import {Users} from '../index'
import {Orders} from '../index'
import {Products} from '../index'
import {Comments} from '../index'
import {Discounts} from '../index'
import {NotFound} from '../index'

export const routes = [
    { path: '/*', element: <NotFound /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> },
    { path: '/comments', element: <Comments /> },
    { path: '/products', element: <Products /> },
    { path: '/discounts', element: <Discounts /> },
]