import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  decreaseQuantity,
  getPizzaQuantityCart,
  increaseQuantity,
} from "../features/cart/cartSlice";

function UpdateQuantity({ pizzaId }) {
  const totalQuantity = useSelector(getPizzaQuantityCart(pizzaId));

  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span>{totalQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
