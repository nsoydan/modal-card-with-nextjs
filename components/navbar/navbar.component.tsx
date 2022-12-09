import { Fragment } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <Fragment>
      <nav >
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Image src={Logo} width={36} height={36} />
              <div className="flex space-x-4">
                <a href="#" className="">
                  modal.card
                </a>

                <a href="#">Solutions</a>

                <a href="#">Product Tour</a>

                <a href="#">Showcase</a>
                <a href="#">Pricing</a>
                <a href="#">Sign in</a>
                <button
                  className="bg-purple-800 py-2 px-4 text-white font-semibold  
                
                
                rounded"
                >
                  Try for free
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
