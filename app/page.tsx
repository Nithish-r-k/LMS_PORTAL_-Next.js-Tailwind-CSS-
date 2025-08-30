// lms-web/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      
      {/* 🔹 Gradient Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white p-10 rounded-2xl shadow-lg mb-10">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to LMS Portal 🎓</h1>
        <p className="text-lg max-w-2xl mb-8">
          Learn React, Next.js, and more with our interactive courses.
          Hands-on lessons and quizzes to sharpen your skills.
        </p>
        <Link
          href="/courses"
          className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl shadow hover:bg-gray-100 transition"
        >
          🚀 Browse Courses
        </Link>
      </div>

      {/* 🔹 Original Section with soft gradient background */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-10 mt-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-6">
          Start Your Learning Journey
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Master modern web development step by step. Explore lessons, practice with quizzes, 
          and build real-world projects.
        </p>
        <Link
          href="/courses"
          className="btn bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-lg"
        >
          📚 Explore Courses
        </Link>
      </div>
    </div>
  );
}
