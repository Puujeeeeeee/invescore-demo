const CeoPage = () => {
  return (
    <div className="flex justify-center items-center mt-16 z-10 ">
      <div className="w-[1024px] h-[430px]  rounded-xl bg-white relative m-10 flex p-[45px] gap-10 ">
        <div className="w-1/2 h-full  flex flex-col justify-end gap-6 relative">
          <img className="absolute top-0 right-0" src="quotation.svg" alt="" />
          <p className="text-black font-semibold text-3xl ">
            Бид таны оруулсан хувь нэмрийг үнэлж, ахиц дэвшлийн төлөө санхүүгийн
            өндөр хариуцлага амлаж байна.
          </p>
          <div className="flex flex-col">
            <p className="text-black font-semibold text-2xl">Д. Баясгалан</p>

            <p className="text-gray-500 font-medium"> Гүйцэтгэх захирал</p>
          </div>
        </div>
        <div className="w-1/2 h-full rounded-xl">
          <img src="baysgalan_home.webp" alt="" />
        </div>
      </div>
    </div>
  );
};
export default CeoPage;
