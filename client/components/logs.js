import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogs } from '../redux/reducers/logs'

const Logs = () => {
  const logs = useSelector((s) => s.logs.logs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLogs())
  })
  return (
    <div>
      {logs.map((el) => (
        <div key={el.event} className="border-2 border-gray-300 p-3 my-2">
          {el.event} on {el.time}
        </div>
      ))}
    </div>
  )
}

export default Logs
