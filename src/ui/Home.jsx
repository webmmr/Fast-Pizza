import CreateUser from "../features/user/CreateUser";
import Pizza from "../assets/pizza.jpg";
import PizzaMobile from "../assets/pizza-mobile.jpg";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

 

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center px-5 py-10 lg:py-0 ">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h6 className="text-md mb-3 font-semibold">
            The best pizza in town.
          </h6>
          <h1 className="leading mb-10 text-3xl font-light text-lime-500 md:text-4xl lg:text-5xl">
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
        <div className="mt-5 h-full w-full text-center md:mt-0 md:w-1/2">
          <picture>
            <source media="(min-width:768px)" srcset={Pizza}>
            <img src={PizzaMobile} alt="Pizza Image" className="rounded-lg shadow-lg">
          </picture>
          <img
            src={`${isMobileScreen ? PizzaMobile : Pizza}`}
            alt="Piiza Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
