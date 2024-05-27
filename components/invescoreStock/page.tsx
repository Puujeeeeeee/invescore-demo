const InvescorePage = () => {
  return (
    <div className="flex justify-center items-center mt-16 z-10 ">
      <div className="w-[1024px] h-[430px] border rounded-xl relative m-5 ">
        <img className="w-full h-full  " src="stock.png" alt="" />
        <div className="absolute w-full h-full top-0 p-[50px] flex">
          <div className="flex flex-col absolute top-52 w-2/5 flex-wrap">
            <h1 className="text-2xl font-semibold">Инвескор хувьцаа</h1>
            <p className="mt-3 tracking-wide font-semibold">
              Санхүүгийн Зохицуулах Хорооны ээлжит хуралдаанаар “Инвескор ББСБ”
              ХК-ийн нийтэд санал болгох үнэт цаасыг бүртгэж, Монголын хөрөнгийн
              бирж дээр IPO хийх зөвшөөрлийг олгосон юм.
            </p>
          </div>
          <div className="absolute top-20 rounded-xl w-72 h-80 bg-white  right-20 px-[25px] py-[40px]">
            <div className="flex justify-between  text-black font-semibold ">
              <p className="text-xl">INV</p>
              <p className="text-gray-700">2024-05-25</p>
            </div>
            <div className="w-full border-b-2 mt-5"></div>
            <p className="mt-5 text-black text-3xl font-bold">7045</p>
            <div className="flex flex-col mt-5">
              <p className="text-blue-600 text-sm">Өмнөх өдрийн хаалтын ханш</p>
              <p className="text-black">6995.00</p>
            </div>
            <div>
              <p className="text-blue-600 text-sm mt-5">Тухайн өдрийн VWAP</p>
              <p className="text-black">7043.52</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvescorePage;
