const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-full h-auto flex flex-col lg:flex-row gap-10 lg:gap-16 bg-gradient-to-r from-[#002147] to-[#013b7d] px-5 py-10 lg:px-[210px] lg:py-[80px]">
        <div className="flex w-full lg:w-1/2 flex-col gap-5">
          <img
            className="w-[150px] mx-auto lg:mx-0"
            src="main_logo_en.png"
            alt="Main Logo"
          />
          <div className="flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-wrap justify-between gap-5">
              <div className="flex flex-col gap-3 text-sm">
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
              <div className="flex flex-col gap-3 text-sm">
                <p className="">Компани</p>
                <p className="cursor-pointer hover:underline">Бүтэц</p>
                <p className="cursor-pointer hover:underline">Үйлчилгээ</p>
                <p className="cursor-pointer hover:underline">
                  Салбарын хаяг байршил
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-5">
              <div className="flex flex-col gap-3 text-sm">
                <p className="cursor-pointer hover:underline">Мэдээ</p>
                <p className="cursor-pointer hover:underline">Санал хүсэлт</p>
                <p className="cursor-pointer hover:underline">Тусламж</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <p className="cursor-pointer hover:underline">Ажлын байр</p>
                <p className="cursor-pointer hover:underline">
                  Салбарын хаяг байршил
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <div className="flex gap-7 justify-center lg:justify-start">
              <a href="https://www.facebook.com/">
                <img className="w-[25px]" src="fb_icon.svg" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img className="w-[25px]" src="ig_icon.svg" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/">
                <img className="w-[25px]" src="li_icon.svg" alt="LinkedIn" />
              </a>
            </div>
            <div className="text-sm text-gray-300 mt-5 text-center lg:text-left">
              ©2023 Invescore Financial Group. All rights reserved.
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 flex-col gap-10 justify-end items-center lg:items-start">
          <img className="w-[200px]" src="phone.webp" alt="Phone" />
          <div className="flex w-full lg:w-[420px] h-auto bg-[#00152e] rounded-xl justify-center items-center flex-col lg:flex-row">
            <div className="apple w-full lg:w-1/2 h-[60px] bg-black m-1 rounded-xl flex justify-center items-center gap-4 cursor-pointer hover:scale-95">
              <img
                className="w-[30px] h-[30px]"
                src="apple_logo.webp"
                alt="Apple Store"
              />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-[12px] text-gray-500">Download on the</p>
                <p className="text-sm">App Store</p>
              </div>
            </div>
            <div className="playstore w-full lg:w-1/2 h-[60px] bg-black m-1 rounded-xl flex justify-center items-center gap-4 cursor-pointer hover:scale-95">
              <img
                className="w-[30px] h-[30px]"
                src="playstore_logo.webp"
                alt="Google Play"
              />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-[12px] text-gray-500">Get it on</p>
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
