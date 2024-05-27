import { FaArrowRight } from "react-icons/fa6";
const LoanSavings = () => {
  return (
    <div className="flex justify-center items-center mt-12 ">
      <div className="w-[1024px] h-[580px] flex gap-6 ">
        <div className="w-1/2 h-full pt-[50px] px-[30px] flex relative bg-gradient-to-r from-blue-700 bg-blue-400 rounded-xl">
          <div className="absolute w-[170px] h-[230px] bg-white left-16 rounded-xl p-[10px] flex flex-col">
            <img
              className="w-full h-[110px] "
              src="salary_cover1.webp"
              alt=""
            />

            <div>
              <h2 className="text-black mt-5 font-medium">Цалингийн зээл</h2>
              <p className="text-gray-500 text-md">2.9% • 24 сар хүртэл</p>
            </div>
          </div>
          <div className="absolute right-12 top-16 rotate-6 w-[170px] h-[230px] bg-white rounded-xl p-[10px] flex flex-col z-10">
            <img className="w-full h-[110px] " src="loan_cover1.webp" alt="" />

            <div>
              <h2 className="text-black mt-5 font-medium">
                Итгэлтэй ирээдүй зээл
              </h2>
              <p className="text-gray-500 text-md">2.9% • 24 сар хүртэл</p>
            </div>
          </div>

          <div className="absolute right-16 top-8 w-[170px] bg-transparent h-[200px] bg-white bg-opacity-[0.26] backdrop-filter backdrop-blur-[4px] rounded-xl p-[10px] flex flex-col z-0"></div>

          <div className="absolute bottom-[-60px] rounded-xl  w-[440px] h-[280px] border bg-white p-[35px] flex flex-col gap-3">
            <h1 className="text-black text-3xl font-bold">Зээл</h1>
            <p className="text-gray-600 text-lg leading-8">
              Хөрөнгө оруулагч та хүссэн валютаараа тогтвортой өсөлт, үнэ
              цэнэтэй хуримтлал үүсгээрэй.
            </p>
            <button className="w-[160px] h-[40px] flex items-center justify-center gap-3  bg-gradient-to-r from-blue-700 bg-blue-400  rounded-xl hover:scale-95">
              <p>Дэлгэрэнгүй</p> <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full pt-[50px] px-[30px] flex relative bg-gradient-to-r from-[#002147] to-[#013b7d] rounded-xl">
          <div className="absolute w-[210px] h-[210px] bg-transparent rounded-xl bg-white bg-opacity-[0.26] backdrop-filter backdrop-blur-[4px]rounded-xl  flex flex-col gap-2 p-[15px]">
            <p className="text-white">Итгэлцэл байршуулах дүн</p>
            <div className="flex flex-col gap-5">
              <div className="w-full h-[50px] border border-white rounded-xl bg-white flex px-[10px] items-center font-bold text-xl text-black">
                ₮ 20,000,000
              </div>
              <div className="w-full h-[50px] border -rotate-6 border-white rounded-xl bg-white flex flex-col px-[10px] p-[5px] ">
                <p className="text-gray-800 text-[12px] font-bold">Үр шим</p>
                <p className="font-bold text-green-500 "> ₮ 20,000,000</p>
              </div>
            </div>
       
          </div>
             <img className="w-[150px] h-[170px] absolute right-8 top-[210px]" src="hurimtlal.webp" alt="" />

          <div className="absolute bottom-[-60px] rounded-xl  w-[440px] h-[280px] border bg-white p-[35px] flex flex-col gap-3">
            <h1 className="text-black text-3xl font-bold">Хуримтлал</h1>
            <p className="text-gray-600 text-lg leading-8">
              Хөрөнгө оруулагч та хүссэн валютаараа тогтвортой өсөлт, үнэ
              цэнэтэй хуримтлал үүсгээрэй.
            </p>
            <button className="w-[160px] h-[40px] flex items-center justify-center gap-3  bg-gradient-to-r from-[#002147] to-[#013b7d]  rounded-xl hover:scale-95">
              <p className="">Дэлгэрэнгүй</p> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoanSavings;
