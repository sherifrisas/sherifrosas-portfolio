import Link from "next/link";

export default function About() {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-800 mb-4">Sherif Rosas, Egyptian Police Academy, Class of 1998</p>
          <p className="text-lg text-gray-700 mb-2">Master of Public Law, Faculty of Law, Cairo University, 2020</p>
          <p className="text-lg text-gray-700 mb-2">PhD researcher in Artificial Intelligence and its Applications in Economic and Financial Policymaking</p>
          <p className="text-lg text-gray-700 mb-2">Machine Learning Specialist, Stanford University Online</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left mb-6">
            <h3 className="text-xl font-semibold mb-2">Supervised Machine Learning: Regression and Classification</h3>
            <p className="text-gray-700 mb-1">DeepLearning.AI & Stanford University (Coursera)</p>
            <p className="text-gray-700 mb-1">Completed: June 25, 2024</p>
            <p className="text-gray-700 mb-2">Certificate of completion for building and training supervised machine learning models in Python using NumPy & scikit-learn, including linear and logistic regression, feature engineering, and predictive modeling.</p>
            <a href="https://www.coursera.org/account/accomplishments/records/XXWTGE8THMLQ" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Data Science: Probability</h3>
            <p className="text-gray-700 mb-1">HarvardX (edX)</p>
            <p className="text-gray-700 mb-1">Completed: August 24, 2021</p>
            <p className="text-gray-700 mb-2">Verified certificate for successful completion of PH125.3x: Data Science: Probability, a course of study offered by HarvardX, an online learning initiative of Harvard University.</p>
            <a href="https://courses.edx.org/certificates/bbdbcb822db546d2934f1e10706e63f4" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Data Science: Visualization</h3>
            <p className="text-gray-700 mb-1">HarvardX (edX)</p>
            <p className="text-gray-700 mb-1">Completed: April 11, 2021</p>
            <p className="text-gray-700 mb-2">Verified certificate for successful completion of PH125.2x: Data Science: Visualization, a course of study offered by HarvardX, an online learning initiative of Harvard University.</p>
            <a href="https://courses.edx.org/certificates/727bed0c119f400c99cb9af4b7ba3822" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Data Science: R Basics</h3>
            <p className="text-gray-700 mb-1">HarvardX (edX)</p>
            <p className="text-gray-700 mb-1">Completed: January 5, 2021</p>
            <p className="text-gray-700 mb-2">Verified certificate for successful completion of PH125.1x: Data Science: R Basics, a course of study offered by HarvardX, an online learning initiative of Harvard University.</p>
            <a href="https://courses.edx.org/certificates/0d6f498ebbd3429983dca6ad49ea03a3" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Advanced Learning Algorithms</h3>
            <p className="text-gray-700 mb-1">DeepLearning.AI & Stanford University (Coursera)</p>
            <p className="text-gray-700 mb-1">Completed: October 4, 2024</p>
            <p className="text-gray-700 mb-2">Certificate of completion for building and training neural networks with TensorFlow, multi-class classification, decision trees, random forests, boosted trees, and best practices for machine learning development.</p>
            <a href="https://coursera.org/share/9210867dacec623fdb6ced604ac12bcc" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Algebra and Differential Calculus for Data Science</h3>
            <p className="text-gray-700 mb-1">University of Colorado Boulder (Coursera)</p>
            <p className="text-gray-700 mb-1">Completed: August 30, 2023</p>
            <p className="text-gray-700 mb-2">Certificate of completion for mastering algebra, logarithms, derivatives, and calculus concepts for data science, including graphing and numerical analysis.</p>
            <a href="https://coursera.org/share/e0f20b45f0e686e4c5ba98fafa5437db" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Introduction to Probability and Data with R</h3>
            <p className="text-gray-700 mb-1">Duke University (Coursera)</p>
            <p className="text-gray-700 mb-1">Completed: August 26, 2022</p>
            <p className="text-gray-700 mb-2">Certificate of completion for mastering probability, data analysis, exploratory data analysis, descriptive statistics, and R programming for data science.</p>
            <a href="https://coursera.org/share/fd2086ed0102626ec38a71090ea5f640" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 max-w-xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-2">Introduction to Time Value of Money (TVM)</h3>
            <p className="text-gray-700 mb-1">University of Michigan (Coursera)</p>
            <p className="text-gray-700 mb-1">Completed: August 4, 2022</p>
            <p className="text-gray-700 mb-2">Certificate of completion for understanding and applying the Time Value of Money (TVM), financial analysis, forecasting, loans, cash flows, and financial planning.</p>
            <a href="https://coursera.org/share/a6001f1e05fe181acbae1b6e0ad4550a" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">View Certificate</a>
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
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/201065661882" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +20 106 566 1882
              </a>
            </p>
            <p>
              <strong>Title:</strong> AI Consultant for Economic Policy
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/sherif-rosas" target="_blank" rel="noopener noreferrer" className="hover:underline">
                www.linkedin.com/in/sherif-rosas
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 