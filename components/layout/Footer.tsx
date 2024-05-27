const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-[100vw] h-[90vh] flex gap-[100px] bg-gradient-to-r from-[#002147] to-[#013b7d] px-[210px] py-[80px]">
        <div className="flex w-1/2 h-full  flex-col gap-5">
          <img className="w-[150px]" src="main_logo_en.png" alt="" />
          <div className="flex flex-col gap-16">
            <div className="flex  justify-between">
              <div className="flex flex-col gap-5 text-sm ">
                <p className="cursor-pointer hover:underline">Бодлого журам</p>
                <p className="cursor-pointer hover:underline">
                  Нууцлалын бодлого
                </p>
                <p className="cursor-pointer hover:underline">Үйлчилгээ</p>
                <p className="cursor-pointer hover:underline">
                  Хөрөнгө оруулагч
                </p>
                <p className="cursor-pointer hover:underline">Түншлэл</p>
              </div>
              <div className="flex flex-col gap-5 text-sm">
                <p className="">Компани</p>
                <p className="cursor-pointer hover:underline">Бүтэц</p>
                <p className="cursor-pointer hover:underline">Үйлчилгээ</p>
                <p className="cursor-pointer hover:underline">
                  Салбарын хаяг байршил
                </p>
              </div>
            </div>

            <div className="flex  justify-between ">
              <div className="flex flex-col gap-5 text-sm">
                <p className="cursor-pointer hover:underline">Мэдээ</p>
                <p className="cursor-pointer hover:underline">Санал хүсэлт</p>
                <p className="cursor-pointer hover:underline">Тусламж</p>
              </div>
              <div className="flex flex-col gap-5 text-sm">
                <p className="cursor-pointer hover:underline">Ажлын байр</p>
                <p className="cursor-pointer hover:underline">
                  Салбарын хаяг байршил
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <div className="flex gap-7 ">
              <a
                href="https://www.facebook.com/
                "
              >
                <img className="w-[25px]" src="fb_icon.svg" alt="" />
              </a>

              <a href="https://www.instagram.com/">
                <img className="w-[25px]" src="ig_icon.svg" alt="" />
              </a>

              <a href="https://www.linkedn.com/">
                <img className="w-[25px]" src="li_icon.svg" alt="" />
              </a>
            </div>
            <div className="text-sm text-gray-300 mt-5">
              ©2023 Invescore Financial Group Copyright. All rights reserved.
            </div>
          </div>
        </div>
        <div className="flex w-1/2 h-full   flex-col gap-10 justify-end items-center">
          <img className="w-[200px] b" src="phone.webp" alt="" />
          <div className="flex w-[420px] h-80px] bg-[#00152e] rounded-xl justify-center items-center">
            <div className="apple w-[200px] h-[60px] bg-black m-1 rounded-xl flex justify-center items-center gap-4 cursor-pointer hover:scale-95">
              <img className="w-[30px] h-[30px]" src="apple_logo.webp" alt="" />
              <div className="flex flex-col">
                <p className="text-[12px] text-gray-500">Download on the</p>
                <p className="text-sm">App Store</p>
              </div>
            </div>
            <div className="playstore w-[200px] h-[60px] bg-black m-1 rounded-xl flex justify-center items-center gap-4 cursor-pointer hover:scale-95">
              <img
                className="w-[30px] h-[30px]"
                src="playstore_logo.webp"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-[12px] text-gray-500">Get in on </p>
                <p className="text-sm">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
