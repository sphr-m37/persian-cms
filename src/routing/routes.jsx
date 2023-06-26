import { Users } from '../index'
import { Orders } from '../index'
import { Products } from '../index'
import { Comments } from '../index'
import { Discounts } from '../index'
import { NotFound } from '../index'

export const routes = [
    { path: '/', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> },
    { path: '/comments', element: <Comments /> },
    { path: '/discounts', element: <Discounts /> },
    { path: '/*', element: <NotFound /> },
]