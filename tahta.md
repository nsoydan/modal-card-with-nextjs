    <div
        className="bg-`${content.color}` relative h-[156px] w-[170px]  left-0 rounded-xl p-2 scale-100"
    >
        <div className="w-[16px] h-[16px] relative right-0 top-2 hover:cursor-pointer">
          <Image src={cancel} width={15} height={15} />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="py-3">
            <Image src={Ellipse} width={45} height={45} />
          </div>
          <a className="text-xl font-bold">Security Code</a>
          <p className="text-lg">This code expires in 24 hours</p>
          <input
            type="text"
            placeholder="code"
            className="rounded border-2 m-4"
          />
          <div className="grid-cols-2 m-4 ">
            <button className=" border-2 rounded mt-1">Cancel</button>
            <button className=" bg-red-500 border-2 rounded m-4">
              Continue
            </button>
          </div>
        </div>
      </div>