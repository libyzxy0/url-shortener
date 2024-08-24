import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse"
          >
            <h1 className="text-3xl font-bold text-gray-800"><i className="font-amsterdam text-emerald-400">Short</i><i className="font-amsterdam text-gray-800">RL</i></h1>
            <p className="text-gray-400">by libyzxy0</p>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <Link to="about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                to="privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="https://www.libyzxy0.com" className="hover:underline">
                Developer Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link to="https://short-url.vercel.app" className="hover:underline">
            ShortRL - libyzxy0
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};