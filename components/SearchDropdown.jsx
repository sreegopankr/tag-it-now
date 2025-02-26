"use client"

import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Unsorted", label: "Unsorted" },
  { value: "Fitness & Health", label: "Fitness & Health" },
  { value: "Tech Gadgets", label: "Tech Gadgets" },
  { value: "Best Restaurants", label: "Best Restaurants" },
  { value: "Skin Care Products", label: "Skin Care Products" }
];

function SearchDropdown({ post, setPost }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange=(selectedOption)=>{
        setSelectedOption(selectedOption);
        // console.log(selectedOption.value)
        setPost({...post,group: selectedOption.value});
    }

  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Search..."
        isSearchable={true} // Enables search functionality
      />
    </div>
  );
}

export default SearchDropdown;
