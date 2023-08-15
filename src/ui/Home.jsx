import CreateUser from "../features/user/CreateUser";
import Pizza from "../assets/pizza.jpg";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="">
      <div className="flex  items-center justify-center">
        <div className="flex-1">
          <h6 className="text-md mb-3 font-semibold">
            The best pizza in town.
          </h6>
          <h1 className="leading mb-10 text-5xl font-light text-lime-500">
            Straight out of the oven, straight to your door.
          </h1>

          {username === "" ? (
            <CreateUser />
          ) : (
            <Button to="/menu" type="primary">
              Keep Ordering
            </Button>
          )}
        </div>
        <div className="h-full basis-2/5">
          <img src={Pizza} alt="Piiza Image" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
