import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBase } from '../redux/reducers/shop'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between px-10 py-8 bg-gray-200">
      <div>
        {['USD', 'EUR', 'CAD'].map((el, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <button
              key={index}
              type="button"
              className="px-4 py-3 bg-gray-100 focus:outline-none"
              onClick={() => dispatch(setBase(el))}
            >
              {el}
            </button>
          )
        })}
      </div>
      <div>
        <Link to="/" className="font-bold px-2">
          Home
        </Link>
        <Link to="/basket" className="font-bold px-2">
          Basket
        </Link>
        <Link to="/logs" className="font-bold px-2">
          Logs
        </Link>
      </div>
    </div>
  )
}

export default Header
