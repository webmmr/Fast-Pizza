/* eslint-disable react/prop-types */
import UpdateQuantity from "../../ui/UpdateQuantity";
import { formatCurrency } from "../../utilities/helpers";
import RemoveButton from "./RemoveButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-5 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-md font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} />
        <RemoveButton pizzaId={pizzaId}>Remove</RemoveButton>
      </div>
    </li>
  );
}

export default CartItem;
