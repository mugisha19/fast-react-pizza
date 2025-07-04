import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16 sm:px-4">
      <h1 className="mb-8 text-sm font-semibold sm:text-xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
