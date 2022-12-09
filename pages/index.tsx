import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar.component";
import styles from "../styles/Home.module.scss";
import image1 from "../public/image1.png";
import vector from "../public/vector.svg";
import Modal from "../components/modal/modal.component.";
//import {MODALS} from "../modals";
import { useContext, useState, useRef, useEffect } from "react";
import { ModalsContext } from "../context/modals.context";
import Template from "../components/template/template.component";
import { TemplateContext } from "../context/template.context";
//import DragAndDrop from "../components/dragDrop/dragDrop";
import Modal1 from "../components/modal1";
import Modal2 from "../components/modal2";
import EditYourComponent from "../components/editYourComponent";

const Home: NextPage = () => {
  const { modals } = useContext(ModalsContext);
  const { changeSize, changeColor, template, changePosition } =
    useContext(TemplateContext);

  return (
    <div>
      <Head>
        <title>Modal Card</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Navbar />
          <div className="grid grid-cols-3">
            <span className=" text-6xl mt-14 font-bold  ">
              Simple modal <br /> card creator
            </span>
          </div>
          <h3 className="text-[30px] mt-10 border-spacing-2">
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center <br /> and rotate-90 that can becomposed to build any
            design, directly in your markup.
          </h3>
          <button className="bg-purple-800 py-7 px-10 mt-24 text-white text-[20px] rounded-xl">
            Try it out now
          </button>

          <div className="flex justify start mt-12">
            <span className=" text-[13px] pr-10">Free and paid plans</span>
            <span className=" text-[13px] pr-10">Setup in minutes</span>
            <span className=" text-[13px] pr-10">No credit card required*</span>
          </div>
        </div>
        <div className={styles.rectangular}>
          <div className="grid grid-cols-2 ">
            <div className="col-span-1 rounded-l-[40px] flex flex-col justify-around ">
              <Image src={vector} />
              <h4 className="text-[40px] font-bold m-2">Join the club</h4>
              <p className="mx-2">
                Subscribe and Get an Extra 25% Off on your first purchase.
              </p>
              <input
                className="border-4  rounded-xl mx-2"
                placeholder="Email adress"
              />
              <button className="bg-black rounded-xl text-white mx-2 ">
                Subscribe
              </button>
              <p className="text-xs mx-3">
                By signing up, you agree to Privacy Policy and Terms of Use.
              </p>
            </div>
            <div className="col-span-1 rounded-r-sm">
              <Image
                className="rounded-r-[40px] self-stretch"
                src={image1}
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.middleContainer}>
          <div className="grid grid-cols-4 justify-items-center  text-white">
            <div className="col-span-1 flex flex-col mt-72">
              <a className="text-[72px] font-bold ">3x</a>
              <p className="text-base">
                Increase
                <br /> conversion rate
              </p>
            </div>

            <div className="col-span-1 flex flex-col mt-72">
              <a className="text-[72px] font-bold">120%</a>
              <a className="text-base">
                Email <br /> Subscribers
              </a>
            </div>
            <div className="col-span-1 flex flex-col mt-72">
              <a className="text-[72px] font-bold">390%</a>
              <a className="text-base">
                More Customer <br />
                Engagement
              </a>
            </div>
            <div className="col-span-1 flex flex-col mt-72">
              <a className="text-4xl">
                Popupsmarts meets <br /> all your business
                <br /> needs.
              </a>
            </div>
          </div>
        </div>

        <div className="ml-20 mt-20 ">
          <div className="grid grid-cols-3 ">
            <div className="col-span-1 flex flex-col gap-6">
              <a className="text-4xl font-bold">Modal Card Generator</a>
              <p className="text-base">
                Measure your return on email marketing efforts easier and faster
                by using the best online tools. Popupsmart is ready to help you
                build an efficient email list!
              </p>
            </div>
          </div>

          <div className=" bg-gray-400 w-96 rounded-xl text-base font-bold mt-10  ">
            <span>1</span>
            <span className="text-xl ml-10 font-bold">
              Choose your template
            </span>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-20 place-items-center bg-gray-200">
            {modals.map((modal) => modal.src)}
          </div>

          <div className=" bg-orange-400 w-96 rounded-xl text-base font-bold mt-24  ">
            <span className="ml-2 text-xl">2</span>

            <span className="text-xl ml-10 font-bold">
              Appearence (Size,colors,logo)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-5">
            <div className="col-span-1 ">
              <h1 className="text-xl">Size</h1>
              <div className="mt-3">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 mx-2 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded-full "
                  onClick={() => changeSize("s")}
                >
                  Small
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 mx-2 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    changeSize("m");
                  }}
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 mx-2 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => changeSize("l")}
                >
                  Large
                </button>
              </div>
              <h1 className="text-xl mt-5">Position</h1>
              <div>
                <button
                  onClick={() => changePosition("relative top-0 left-0")}
                  className="rounded-tl-2xl  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-0 left-[300px]")}
                  className="  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-0 left-[550px]")}
                  className="rounded-tr-2xl  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <br />
                <button
                  onClick={() => changePosition("relative top-[150px] left-0")}
                  className="rounded-4  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-[150px] left-[300px]")}
                  className="rounded-4  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-[150px] left-[550px]")}
                  className="rounded-4  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <br />
                <button
                  onClick={() => changePosition("relative top-[250px] left-0")}
                  className="rounded-bl-2xl  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-[250px] left-[300px]")}
                  className="rounded-4  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
                <button
                  onClick={() => changePosition("relative top-[250px] left-[550px]")}
                  className="rounded-br-2xl  p-4 h-6 w-4 m-1 border-2 hover:bg-indigo-500 transition duration-150 "
                />
              </div>
              <h1 className="text-xl mt-5">Colors</h1>
              <div className="grid grid-cols-10 mt-5 ">
                <div
                  className="bg-[#000000] w-10 h-10 rounded-lg hover:cursor-pointer "
                  onClick={() => changeColor("#000000")}
                />
                <div
                  className="bg-[#F37C34] w-10 h-10 rounded-lg hover:cursor-pointer"
                  onClick={() => changeColor("#F37C34")}
                />
                <div
                  className="bg-[#777777] w-10 h-10 rounded-lg hover:cursor-pointer"
                  onClick={() => changeColor("#777777")}
                />
                <div
                  className="bg-[#DDDDDD] w-10 h-10 rounded-lg hover:cursor-pointer"
                  onClick={() => changeColor("#DDDDDD")}
                />
                <div
                  className="bg-[#FFFFFF] w-10 h-10 rounded-lg border-2 hover:cursor-pointer"
                  onClick={() => changeColor("#FFFFFF")}
                />
              </div>

              <div className=" bg-gray-400 w-96 rounded-xl text-base font-bold mt-24  ">
                <span className="ml-2 text-xl">3 </span>
                <span className="text-xl ml-10 font-bold">Content</span>
              </div>

              <h1 className="text-xl mt-5">Edit your content</h1>

              <EditYourComponent />
            </div>
            <div className="col-span-2 bg-blue-200 relative ">
              {template && <Template />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
