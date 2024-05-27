const StandartPage = () => {
  return (
    <div className="flex justify-center items-center mt-12 ">
      <div className="w-[1024px] h-[384px] flex gap-6 m-5 ">
        <div className="w-1/2 h-full  bg-white rounded-xl pt-[40px] pl-[30px] relative ">
          <div className="flex flex-col w-[250px] h-[250px] ">
            <h1 className="text-3xl font-bold text-black">Стандарт</h1>
            <p className="mt-6 text-gray-700 text-lg tracking-wide leading-7">
              Чанарын удирдлагын ISO 9001, Мэдээллийн аюулгүй байдлын ISO 27001
              стандартуудыг бүрэн хангасан Монголын анхны ББСБ юм.
            </p>
          </div>
          <img
            className="w-[230px] absolute bottom-2 right-2"
            src="standart_icon.webp"
            alt=""
          />
        </div>
        <div className="w-1/2 h-full  bg-[#013b7d] rounded-xl pt-[40px] pl-[30px] relative ">
          <div className="flex flex-col w-[250px] h-[250px] ">
            <h1 className="text-3xl font-bold text-white">Өсөлт</h1>
            <p className="mt-6 text-white text-lg tracking-wide leading-7">
              Өөрийн хөрөнгөө сүүлийн 5 жилийн хугацаанд 8,6 дахин өсгөн,
              Монголдоо төдийгүй Төв азийн зах зээлд тогтвортой үйл ажиллагаа
              явуулж байна.
            </p>
          </div>
          <img
            className="w-[250px] h-[300px] absolute bottom-0 right-6"
            src="chart_icon.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default StandartPage;
