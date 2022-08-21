import { increment, decrement } from "./counterSlice"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

  return (
    <div>
          <Button variant="primary" size="lg" onClick={() => dispatch(increment())}>+</Button>
          <span className="fs-2 mx-4">{count}</span>
          <Button variant="secondary" size="lg" onClick={() => dispatch(decrement())}>-</Button>
    </div>
  )
}

export default Counter