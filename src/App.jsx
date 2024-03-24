import React, { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';

import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import SavedRoutes from './Components/SavedRoutes/SavedRoutes';
import { QueryClient, QueryClientProvider, ReactQueryDevTools } from 'react-query';
import Details from './Components/Details/Details';

import CounterContextProvider from './Context/Counter';
import TokenContextProvider from './Context/Token';
import CartContextProvider from './Context/CartContext';



import Checkout from './Components/Checkout/Checkout';
import AllOrders from './Components/AllOrders/AllOrders';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <LayOut />, children: [
        { path: 'home', element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes> <Products /></ProtectedRoutes> },
        { path: 'categories', element: <ProtectedRoutes> <Categories /> </ProtectedRoutes> },
        { path: 'cart', element: <ProtectedRoutes><Cart /> </ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes> <Brands /></ProtectedRoutes> },
        { path: 'checkout', element: <ProtectedRoutes> <Checkout /></ProtectedRoutes> },
        { path: 'allOrders', element: <ProtectedRoutes> <AllOrders/></ProtectedRoutes> },
        { path: 'wishlist', element: <ProtectedRoutes> <Wishlist/></ProtectedRoutes> },
        { path: 'home/details/:id', element: <ProtectedRoutes> <Details /></ProtectedRoutes> },

        { path: 'login', element: <SavedRoutes><Login /></SavedRoutes> },
        { path: 'register', element: <SavedRoutes><Register /></SavedRoutes> },

        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  let query = new QueryClient()
  return (<>


    <CartContextProvider>

      <QueryClientProvider client={query}>

        <TokenContextProvider>
          <CounterContextProvider>
            <RouterProvider router={routes}> </RouterProvider>
          </CounterContextProvider>
        </TokenContextProvider>

      </QueryClientProvider>



    </CartContextProvider>









  </>)
}

export default App;




