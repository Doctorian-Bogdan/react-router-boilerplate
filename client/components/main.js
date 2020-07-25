import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelection, removeFromSelection, sortCatalog } from '../redux/reducers/shop'

const Catalog = () => {
  const products = useSelector((s) => s.shop.products)
  const selected = useSelector((s) => s.shop.selected)
  const currency = useSelector((s) => s.shop.currency)
  const base = useSelector((s) => s.shop.base)
  const dispatch = useDispatch()
  const ratesSymbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div>
      <select
        className="bg-white p-2 border-2 border-gray-300 mb-2 rounded focus:outline-none"
        onChange={(e) => dispatch(sortCatalog(products, e.target.value))}
      >
        <option value="">select</option>
        <option value="highest">lowest to highest</option>
        <option value="lowest">highest to lowest</option>
      </select>
      <div className="flex flex-wrap -mx-10">
        {products.map((el) => (
          <div key={el.id} className="w-1/4 px-10">
            <div className="border-2 border-gray-400 p-6 rounded-md mb-3 text-center">
              <img src={el.image} alt="product" className="h-56 w-full object-contain " />
              <h4 className="mt-2">{el.title}</h4>
              <p>
                {(el.price * (currency[base] || 1)).toFixed(2)} {ratesSymbols[base]}
              </p>
              <div className="quantity flex justify-center mt-3">
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
        ))}
      </div>
    </div>
  )
}

export default Catalog
