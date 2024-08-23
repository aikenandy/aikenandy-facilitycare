import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="bg-[url('/knust_pic.jpeg')] bg-cover min-h-dvh bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center h-full text-white bg-black/80 min-h-dvh">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold md:text-5xl">
          Explore Campus<span>Care</span>
        </h1>

        {/* Sign In Button */}
        <div className="mt-6">
          <button
            type="button"
            className="px-5 py-2 text-xl bg-blue-500 rounded-md hover:bg-blue-700"
          >
            <Link to="/sign-in">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
