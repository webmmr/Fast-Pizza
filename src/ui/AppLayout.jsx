import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout() {
  const navigator = useNavigation();
  const isLoading = navigator.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
