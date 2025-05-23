import { useNavigate } from 'react-router-dom';

export default function PYQSection() {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Aryabhatta Knowledge University (AKU)', logo: '/Logo/AKU_logo.png' },
    { name: 'Patliputra University (PPU)', logo: '/Logo/Patliputra_University.svg.png' },
    { name: 'Patna University', logo: '/Logo/Patna_Uni_logo.jpeg' },
    { name: 'Nalanda Open University', logo: '/Logo/Nalanda_Uni_logo.png' },
    { name: 'Magadh University', logo: '/Logo/Magadh_University_logo.jpg' },
    { name: 'Lalit Narayan Mithila University', logo: '/Logo/Lalit_logo.jpg' },
    { name: 'Veer Kunwar Singh University', logo: '/Logo/veer_logo.jpeg' },
    { name: 'Jai Prakash University', logo: '/Logo/jai_logo.avif' },
    { name: 'Bhupendra Narayan Mandal University', logo: '/Logo/bhu_logo.jpeg' }
  ];

  return (
    <section className="py-12 px-4 bg-[#FFEFD5] text-[#5C4033]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar Filters */}
        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search University..."
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

        {/* Subject Cards */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj, idx) => (
            <div
              key={idx}
              className="border border-[#5C4033] rounded-lg p-4 shadow hover:shadow-md transition text-center"
            >
              <img
                src={subj.logo}
                alt={`${subj.name} logo`}
                className="h-16 w-auto mx-auto object-contain mb-3"
              />
              <h3 className="text-lg font-semibold">{subj.name}</h3>
              <button
                className="mt-2 text-sm text-[#5C4033] hover:underline hover:bg-[#FFEFD5] hover:text-[#5C4033]"
                onClick={() => navigate(`/pyqs/${encodeURIComponent(subj.name)}`)}
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
