import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelection, removeFromSelection } from '../redux/reducers/shop'

const Basket = () => {
  const dispatch = useDispatch()
  const catalog = useSelector((s) => s.shop.products)
  const selected = useSelector((s) => s.shop.selected)
  const cart = catalog.filter((el) => Object.keys(selected).includes(el.id))
  const currency = useSelector((s) => s.shop.currency)
  const base = useSelector((s) => s.shop.base)
  const ratesSymbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  const total = Object.keys(selected).reduce((acc, rec) => {
    return acc + cart.find((item) => item.id === rec).price * selected[rec] * (currency[base] || 1)
  }, 0).toFixed(2)
  return (
    <div>
      {cart.map((el) => {
        return (
          <div key={el.id} className="flex flex-wrap border-2 border-gray-300 my-2 p-3">
            <div className="w-1/3 text-center">{el.title}</div>
            <div className="w-1/3 text-center">
              {(el.price * (currency[base] || 1)).toFixed(2)} {ratesSymbols[base]}
            </div>
            <div className="w-1/3">
              <div className="quantity flex justify-center">
                <button
                  type="button"
                  className="border-2 border-blue-grey-200 px-3"
                  onClick={() => dispatch(addToSelection(el.id))}
                >
                  +
                </button>
                <span className="inline-block px-3">{selected[el.id] || 0}</span>
                <button
                  type="button"
                  className="border-2 border-blue-grey-200 px-3"
                  onClick={() => dispatch(removeFromSelection(el.id))}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="text-right">
        <span>
          Total : {total} {ratesSymbols[base]}
        </span>
      </div>
    </div>
  )
}

export default Basket
