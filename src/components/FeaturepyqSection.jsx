export default function FeaturedPYQSection() {
  return (
    <section className="bg-[#FFEFD5] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-4">
            PYQs for Bihar University Students
          </h1>
          <p className="text-lg text-[#5C4033] leading-relaxed">
            Get access to the most reliable previous year questions for BCA, BBA,
            MCA, B.Com and more. Prepared by toppers and curated for your success,
            all in one place.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-72cc-61f8-b3a3-2e0b8d92ca5b/raw?se=2025-05-23T13%3A04%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=2d3cd82d-bd73-5873-8f39-ac5b572d5977&skoid=ea1de0bc-0467-43d6-873a-9a5cf0a9f835&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-23T09%3A44%3A47Z&ske=2025-05-24T09%3A44%3A47Z&sks=b&skv=2024-08-04&sig=18cTaZNj36N14kyl/0bfwwOVyrHfKeS1nbPAMT9y6L4%3D"
            alt="Previous Year Questions Illustration"
            className="w-80 h-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
