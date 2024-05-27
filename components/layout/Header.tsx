import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
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
    <div className="w-full h-20 flex justify-between items-center px-6 md:px-20 bg-[#00152e] bg-opacity-75 backdrop-filter backdrop-blur-[4px] fixed top-0 z-[100]">
      <img className="w-24 md:w-36 flex" src="main_logo_en.png" alt="Logo" />

      <div className="hidden md:flex gap-6 justify-center items-center">
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

      <div className="relative flex gap-4 items-center" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="w-20 h-10 bg-gray-600 border opacity-75 border-gray-400 rounded-xl flex items-center justify-center"
        >
          {selectedLanguage}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-12 w-20 bg-white border border-gray-400 opacity-75 rounded-xl shadow-md">
            <button
              onClick={() => handleLanguageSelect("MN")}
              className="w-full h-10 flex items-center text-black rounded-xl justify-center hover:bg-gray-200"
            >
              MN
            </button>
            <button
              onClick={() => handleLanguageSelect("EN")}
              className="w-full h-10 flex items-center text-black rounded-xl justify-center hover:bg-gray-200"
            >
              EN
            </button>
          </div>
        )}
        <button className="w-20 h-10 rounded-xl bg-gradient-to-r from-blue-700 bg-blue-400 flex items-center justify-center">
          Нэвтрэх
        </button>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white text-black bg-opacity-95 flex flex-col items-center py-4">
          <a className="hover:underline py-2 mt-4" href="#">
            Бүтээгдэхүүн
          </a>
          <a className="hover:underline py-2" href="#">
            Мэдээ
          </a>
          <a className="hover:underline py-2" href="#">
            Компани
          </a>
          <a className="hover:underline py-2" href="#">
            Хөрөнгө оруулагч
          </a>
          <a className="hover:underline py-2" href="#">
            Тогтвортой хөгжил
          </a>
          <a className="hover:underline py-2 mb-4" href="#">
            Хүний нөөц
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
