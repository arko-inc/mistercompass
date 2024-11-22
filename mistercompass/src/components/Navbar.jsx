import React, { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

  // List of continents and countries
  const continents = {
    Africa: ["Nigeria", "South Africa", "Egypt", "Morocco"],
    Asia: ["Japan", "India", "China", "Thailand"],
    Europe: ["France", "Germany", "Italy", "Spain"],
    NorthAmerica: ["USA", "Canada", "Mexico", "Cuba"],
    SouthAmerica: ["Brazil", "Argentina", "Peru", "Colombia"],
    Australia: ["Australia", "New Zealand", "Fiji"],
    Antarctica: ["Research Stations"],
  };

  // Toggle dropdown
  const toggleDropdown = (key) => {
    setDropdown(dropdown === key ? null : key);
    setSubDropdown(null); // Close sub-dropdown when a different dropdown is toggled
  };

  // Toggle sub-dropdown
  const toggleSubDropdown = (key) => {
    setSubDropdown(subDropdown === key ? null : key);
  };

  return (
    <nav className="bg-white shadow-md font-helvetica">
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/"
            className="text-gray-700 hover:text-teal-500 transition-all"
          >
            Home
          </a>

          {/* Destinations Dropdown */}
          <div className="relative transition duration-700">
            <button
              onClick={() => toggleDropdown("destinations")}
              className="text-gray-700 hover:text-teal-500 focus:outline-none"
            >
              Destinations
            </button>
            {dropdown === "destinations" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-64 z-50 ">
                {Object.keys(continents).map((continent) => (
                  <div key={continent} className="relative group">
                    <a
                      href={`/${continent}`}
                      onMouseEnter={() => toggleSubDropdown(continent)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-500"
                    >
                      {continent}
                    </a>
                    {subDropdown === continent && (
                      <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md w-64 z-50 hover:text-teal-500">
                        {continents[continent].map((country) => (
                          <a
                            key={country}
                            href={`/${continent}/${country}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-500"
                          >
                            {country}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="/travel-tips"
            className="text-gray-700 hover:text-teal-500 transition-all"
          >
            Travel Tips
          </a>
          <a
            href="/foods"
            className="text-gray-700 hover:text-teal-500 transition-all"
          >
            Foods
          </a>
          <a
            href="/gears-review"
            className="text-gray-700 hover:text-teal-500 transition-all"
          >
            Gears Review
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-teal-500 transition-all"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden relative">
  <button
    onClick={() => toggleDropdown("mobile")}
    className="text-gray-700 hover:text-teal-500 focus:outline-none"
  >
    ☰
  </button>
  {dropdown === "mobile" && (
    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-64 z-50">
      {/* Normal Links */}
      <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Home
      </a>
      <a href="/destinations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Destinations
      </a>
      <a href="/travel-tips" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Travel Tips
      </a>
      <a href="/foods" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Foods
      </a>
      <a href="/gears-review" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Gears Review
      </a>
      <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
        Contact
      </a>
    </div>
  )}
</div>
      </div>

 
    </nav>
  );
};

export default Navbar;


