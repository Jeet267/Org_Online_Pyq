import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFEFD5] shadow-md px-6 py-4 flex justify-between items-center">

      <div className="text-2xl font-bold text-[#5C4033]">
        ExamPrep
      </div>


      <ul className="flex space-x-4 text-gray-700 font-medium">
        {['Home', 'Subjects', 'About', 'Contact'].map((item, idx) => (
          <li
            key={idx}
            className="px-3 py-1 rounded-md cursor-pointer hover:bg-[#FFEFD5] hover:text-[#5C4033] transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
