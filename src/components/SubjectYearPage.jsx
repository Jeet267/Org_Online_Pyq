import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SubjectYearPage() {
  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];
  const { subjectName, companyName } = useParams();
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 bg-[#FFEFD5] text-[#5C4033]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">


        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search subjects..."
            className="w-full px-4 py-2 border border-[#5C4033] rounded-md text-[#5C4033] placeholder:text-[#5C4033]"
          />
          <select className="w-full px-4 py-2 border border-[#5C4033] rounded-md text-[#5C4033]">
            <option value="" className="text-[#5C4033]">Filter by category</option>
            <option value="core" className="text-[#5C4033]">Core</option>
            <option value="elective" className="text-[#5C4033]">Elective</option>
          </select>
          <button className="w-full bg-[#5C4033] text-[#FFEFD5] py-2 rounded-md hover:bg-[#4a3328] transition">
            Sort by Weight
          </button>
        </div>


        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Previous Year Questions by Year</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {years.map((year) => (
              <div
                key={year}
                onClick={() =>
                  navigate(`/pyqs/${subjectName}/${companyName}/${year}`)
                }
                className="cursor-pointer border border-[#5C4033] rounded-lg p-6 shadow hover:shadow-md transition text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{year}</h3>
                <span className="text-[#5C4033] hover:underline text-sm cursor-pointer">
                  View Papers
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
