import { useParams, useNavigate } from 'react-router-dom';

export default function PYQPage() {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  const companies = [
    'BCA',
    'BBA',
    'MCA',
    'B-ED',
    'BDS',
    'BNY',
    'BHS',
    'MSC',
    'BCOM',
    'BBE',
    'BAMS'
  ];

  return (
    <section className="py-12 px-4 bg-[#FFEFD5] text-[#5C4033]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">


        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search Company..."
            className="w-full px-4 py-2 border border-[#5C4033] rounded-md text-[#5C4033] placeholder:text-[#5C4033]"
          />
          <select className="w-full px-4 py-2 border border-[#5C4033] rounded-md text-[#5C4033]">
            <option value="" className="text-[#5C4033]">Filter by difficulty</option>
            <option value="easy" className="text-[#5C4033]">Easy</option>
            <option value="medium" className="text-[#5C4033]">Medium</option>
            <option value="hard" className="text-[#5C4033]">Hard</option>
          </select>
          <button className="w-full bg-[#5C4033] text-[#FFEFD5] py-2 rounded-md hover:bg-[#4a3328] transition">
            Sort by Relevance
          </button>
        </div>


        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">{`PYQs - ${subjectName}`}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="border border-[#5C4033] rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{company}</h3>
                <p className="text-sm text-[#5C4033] opacity-70">
                  {`Previous questions on ${subjectName} asked in ${company}`}
                </p>
                <button
                  className="mt-2 text-sm text-[#5C4033] hover:underline hover:bg-[#FFEFD5]"
                  onClick={() =>
                    navigate(`/pyqs/${encodeURIComponent(subjectName)}/${encodeURIComponent(company)}`)
                  }
                >
                  View Year
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
