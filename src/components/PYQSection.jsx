import { useNavigate } from 'react-router-dom';
// imort AKU_logo from 

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
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar Filters */}
        <div className="col-span-1 space-y-6">
          <input
            type="text"
            placeholder="Search University..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Filter by category</option>
            <option value="core">Core</option>
            <option value="elective">Elective</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Sort by Weight
          </button>
        </div>

        {/* Subject Cards */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition text-center"
            >
              <img
                src={subj.logo}
                alt={`${subj.name} logo`}
                className="h-16 w-auto mx-auto object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{subj.name}</h3>
              <button
                className="mt-2 text-sm text-blue-600 hover:underline"
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
