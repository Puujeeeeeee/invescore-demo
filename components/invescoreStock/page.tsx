const InvescorePage = () => {
  return (
    <div className="flex justify-center items-center mt-16 z-10">
      <div className="w-[340px]  md:w-full h-full border rounded-xl relative m-5 sm:h-[520px] sm:rounded-xl">
        <img
          className="w-full h-full object-cover"
          src="stock.png"
          alt="Stock"
        />
        <div className="absolute w-full h-full top-0 p-4 md:p-[50px] flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-2/5 p-4 md:p-0 md:absolute md:top-52">
            <h1 className="text-xl md:text-2xl font-semibold">
              Инвескор хувьцаа
            </h1>
            <p className="mt-3 tracking-wide font-semibold text-sm md:text-base">
              Санхүүгийн Зохицуулах Хорооны ээлжит хуралдаанаар “Инвескор ББСБ”
              ХК-ийн нийтэд санал болгох үнэт цаасыг бүртгэж, Монголын хөрөнгийн
              бирж дээр IPO хийх зөвшөөрлийг олгосон юм.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:absolute md:top-20 md:right-20 rounded-xl w-full md:w-72 h-auto bg-white px-4 md:px-[25px] py-4 md:py-[40px]">
            <div className="flex justify-between text-black font-semibold">
              <p className="text-lg md:text-xl">INV</p>
              <p className="text-gray-700 text-sm md:text-base">2024-05-25</p>
            </div>
            <div className="w-full border-b-2 mt-3 md:mt-5"></div>
            <p className="mt-3 md:mt-5 text-black text-2xl md:text-3xl font-bold">
              7045
            </p>
            <div className="flex flex-col mt-3 md:mt-5">
              <p className="text-blue-600 text-xs md:text-sm">
                Өмнөх өдрийн хаалтын ханш
              </p>
              <p className="text-black text-sm md:text-base">6995.00</p>
            </div>
            <div>
              <p className="text-blue-600 text-xs md:text-sm mt-3 md:mt-5">
                Тухайн өдрийн VWAP
              </p>
              <p className="text-black text-sm md:text-base">7043.52</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvescorePage;
