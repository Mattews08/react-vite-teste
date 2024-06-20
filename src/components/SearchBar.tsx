import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="my-4 relative">
      <input
        type="text"
        placeholder="Search menu items"
        className="w-full p-2 pl-10 border border-inputBox rounded-md bg-white text-primaryText"
        onChange={handleInputChange}
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-inputBox" />
    </div>
  );
};

export default SearchBar;
