import Link from "next/link";

const certifications = [
  {
    title: "Advanced Data Science Professional Certificate",
    issuer: "IBM",
    year: "2023",
    thumbnail: "/file.svg", // Placeholder thumbnail
  },
  {
    title: "Machine Learning Engineering",
    issuer: "Coursera",
    year: "2023",
    thumbnail: "/file.svg", // Placeholder thumbnail
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2022",
    thumbnail: "/file.svg", // Placeholder thumbnail
  },
];

export default function Certifications() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-8 shadow-md">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Sherif Rosas
          </Link>
          <div>
            <Link href="/certifications" className="text-lg text-indigo-600 font-semibold ml-6">
              Certifications
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{cert.title}</h2>
                <p className="text-md text-gray-600 mt-2">{cert.issuer} - {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Sherif Rosas. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
} 