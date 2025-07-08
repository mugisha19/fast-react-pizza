import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="sm: grid h-screen grid-rows-[auto_1fr_auto] sm:h-screen sm:grid-rows-[auto_1fr_auto] md:h-screen">
      {isLoading && <Loader />}
      <Header />

      <div className="my-10">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
