import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-8 shadow-md">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Sherif Rosas
          </Link>
          <div>
            <Link href="/certifications" className="text-lg text-gray-600 hover:text-gray-900 ml-6">
              Certifications
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-8 text-center">
        <section className="my-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Sherif Rosas
          </h1>
          <p className="text-2xl text-indigo-600 mt-2">
            Freelance Data Scientist
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
            I help businesses make sense of their data. Specializing in machine learning, data analysis, and creating predictive models that drive growth and efficiency.
          </p>
          <div className="mt-8">
            <a href="mailto:sherif007.rosas@gmail.com" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Contact Me</h3>
          <div className="flex justify-center space-x-8">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sherif007.rosas@gmail.com" className="hover:underline">
                sherif007.rosas@gmail.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong> +20 106 566 1882
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
