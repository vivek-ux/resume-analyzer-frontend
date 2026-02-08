import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6">Resume Analyzer</h1>

      <p className="text-gray-300 mb-8">
        Upload your resume and get ATS score + AI feedback
      </p>

      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 px-6 py-3 rounded-lg">
          Login
        </Link>

        <Link to="/register" className="bg-gray-700 px-6 py-3 rounded-lg">
          Register
        </Link>
      </div>
    </div>
  );
}
