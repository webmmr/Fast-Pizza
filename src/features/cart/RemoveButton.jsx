/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deletePizza } from "./cartSlice";

function RemoveButton({ children, pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="delete" onClick={() => dispatch(deletePizza(pizzaId))}>
      {children}
    </Button>
  );
}

export default RemoveButton;
