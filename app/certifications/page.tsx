import Link from "next/link";

const certificates = [
  {
    name: "HarvardX PH125.3x Certificate (edX)",
    file: "HarvardX PH125.3x Certificate _ edX.html",
    type: "html"
  },
  {
    name: "Coursera: NPUMHK8EZ3MJ",
    file: "Coursera NPUMHK8EZ3MJ.pdf",
    type: "pdf"
  },
  {
    name: "Coursera: 989FUBTL2VVH",
    file: "Coursera 989FUBTL2VVH.pdf",
    type: "pdf"
  },
  {
    name: "Coursera: B6Q2JRB2VP6Z",
    file: "Coursera B6Q2JRB2VP6Z.pdf",
    type: "pdf"
  },
  {
    name: "Coursera: R5YE6HR3HDTJ",
    file: "Coursera R5YE6HR3HDTJ.pdf",
    type: "pdf"
  },
  {
    name: "Coursera: XXWTGE8THMLQ",
    file: "Coursera XXWTGE8THMLQ.pdf",
    type: "pdf"
  },
  {
    name: "Coursera: 7J83EGN76L6U",
    file: "Coursera 7J83EGN76L6U.pdf",
    type: "pdf"
  }
];

export default function Certifications() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>
      <ul className="list-disc list-inside text-lg">
        {certificates.map(cert => (
          <li key={cert.file} className="mb-2">
            <a
              href={`/certificates/${encodeURIComponent(cert.file)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {cert.name} ({cert.type.toUpperCase()})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
} 