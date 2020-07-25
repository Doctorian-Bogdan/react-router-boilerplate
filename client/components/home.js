import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Catalog from './main'
import Header from './header'
import Basket from './basket'
import Logs from './logs'
import { getCurrency, getProducts } from '../redux/reducers/shop'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCurrency())
  }, [dispatch])
  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <Route exact path="/" component={() => <Catalog />} />
        <Route exact path="/basket" component={() => <Basket />} />
        <Route exact path="/logs" component={() => <Logs />} />
      </div>
    </div>
  )
}

export default Home
