const HumanResourcesPage = () => {
  return (
    <div className="flex justify-center items-center mt-6 ">
      <div className="w-[1024px] h-[430px] flex gap-6 relative">
        <img className="w-[1024px] h-[430px] rounded-xl" src="hr_cover_main.webp" alt="" />

        <div className="absolute bottom-[-60px] right-10 rounded-xl justify-between  w-[420px] h-[400px] border bg-white p-[35px] flex flex-col gap-3">
          <h1 className="text-black text-3xl font-bold">Хүний нөөц</h1>
          <p className="text-gray-600 text-lg leading-8">
            Хүний авьяас чадварыг үнэлсэн компани бол олон талт, хүртээмжтэй
            компани юм. Бид хүн бүрийн зорьсон ажлын байрыг бий болгож, хувь
            хүний амжилтыг хамт зорьж, үүгээр хамт амжилтын төлөө зүтгэж байна.
          </p>
          <button className="w-[160px] h-[40px] flex items-center justify-center gap-3  bg-gradient-to-r from-blue-700 bg-blue-400  rounded-xl hover:scale-95">
            <p>Дэлгэрэнгүй</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HumanResourcesPage;
