const OpportunityPage = () => {
    const opportunities = [
      {
        title: "Хугацаа",
        description:
          "Таны зээлийн хүсэлтийг хамгийн богино хугацаанд шийдвэрлэх тул үлдсэн үнэт цагаа өөртөө зарцуулаарай.",
        imgSrc: "time_icon.webp",
        imgAlt: "Time Icon"
      },
      {
        title: "Хэмжээ",
        description:
          "Харилцагчдадаа 2 тэрбум хүртэлх зээлийг санал болгодог ба салбартаа хамгийн өндөр хэмжээтэйд тооцогддог.",
        imgSrc: "money_icon.webp",
        imgAlt: "Money Icon"
      },
      {
        title: "Хариуцлага",
        description:
          "Хамгийн олон харилцагчтай, зах зээлийн тэргүүлэгч байгууллага бөгөөд бид зээл олголтоо нэг ч удаа зогсоож байгаагүй.",
        imgSrc: "trophy_icon.webp",
        imgAlt: "Trophy Icon"
      }
    ];
  
    return (
      <div className="flex justify-center items-center mt-12">
        <div className="w-[1024px] h-[424px] flex justify-between gap-5">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="w-1/3 h-full bg-white rounded-xl relative">
              <div className="w-full h-1/2 pt-[30px] pr-[25px] pl-[30px] flex flex-col gap-5 text-black">
                <h1 className="text-2xl font-semibold">{opportunity.title}</h1>
                <p className="text-lg text-gray-600 leading-7">
                  {opportunity.description}
                </p>
              </div>
              <div className="w-full h-1/2">
                <img
                  className="w-[250px] absolute bottom-0 left-8"
                  src={opportunity.imgSrc}
                  alt={opportunity.imgAlt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OpportunityPage;
  