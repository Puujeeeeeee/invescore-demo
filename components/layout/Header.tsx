import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"MN" | "EN">("MN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language: "MN" | "EN") => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[100vw] h-20 flex justify-between items-center px-20 bg-[#00152e] bg-opacity-[0.5] backdrop-filter backdrop-blur-[4px] fixed top-0 z-[100]">
      <img className="w-[150px] flex" src="main_logo_en.png" alt="Logo" />

      <div className="flex gap-[30px] justify-center items-center">
        <a className="hover:underline" href="#">
          Бүтээгдэхүүн
        </a>
        <a className="hover:underline" href="#">
          Мэдээ
        </a>
        <a className="hover:underline" href="#">
          Компани
        </a>
        <a className="hover:underline" href="#">
          Хөрөнгө оруулагч
        </a>
        <a className="hover:underline" href="#">
          Тогтвортой хөгжил
        </a>
        <a className="hover:underline" href="#">
          Хүний нөөц
        </a>
      </div>

      <div className="relative flex gap-[15px] items-center" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="w-[100px] h-[40px] bg-gray-600 border  opacity-75  border-gray-400 rounded-xl flex items-center justify-center"
        >
          {selectedLanguage}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-[50px] w-[100px] bg-white border border-gray-400 opacity-75 rounded-xl shadow-md">
            <button
              onClick={() => handleLanguageSelect("MN")}
              className="w-full h-[40px] flex items-center text-black rounded-xl justify-center hover:bg-gray-200"
            >
              MN
            </button>
            <button
              onClick={() => handleLanguageSelect("EN")}
              className="w-full h-[40px] flex items-center text-black rounded-xl  justify-center hover:bg-gray-200"
            >
              EN
            </button>
          </div>
        )}
        <button className="w-[100px] h-[40px] rounded-xl bg-gradient-to-r from-blue-700 bg-blue-400 flex items-center justify-center">
          Нэвтрэхх
        </button>
      </div>
    </div>
  );
};

export default Navbar;
