import React, { useState } from 'react';

const Navbar = () => {
  // Optional toggle for <350px, but for simplicity, we'll always show menu on 350px+
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Subjects', 'About', 'Contact'];

  return (
    <nav className="w-full bg-[#FFEFD5] shadow-md px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">

      {/* Logo */}
      <div className="text-2xl font-bold text-[#5C4033] mb-3 sm:mb-0">
        ExamPrep
      </div>

      {/* Menu for ≥350px, vertical stack on small, horizontal on sm+ */}
      <ul className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 text-[#5C4033] font-medium">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="px-3 py-1 rounded-md cursor-pointer hover:bg-[#5C4033] hover:text-[#FFEFD5] transition text-center sm:text-left"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Optional: If you want hamburger toggle for <350px, add here */}

    </nav>
  );
};

export default Navbar;
