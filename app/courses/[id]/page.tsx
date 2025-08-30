// lms-web/app/courses/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Course = {
  id: string;
  title: string;
  description: string;
  lessons: string[];
  quizzes: { question: string; options: string[] }[];
};

export default function CourseDetailsPage() {
  const params = useParams();
  const id = params?.id as string; // ✅ safely cast id

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!course) return <p className="p-6">Course not found.</p>;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Lessons</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        {course.lessons.map((lesson, index) => (
          <li key={index} className="text-gray-700">
            {lesson}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Quiz</h2>
      {course.quizzes.map((quiz, idx) => (
        <div
          key={idx}
          className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-3"
        >
          <p className="font-medium text-gray-800">{quiz.question}</p>
          <ul className="list-disc list-inside ml-4">
            {quiz.options.map((opt, i) => (
              <li key={i} className="text-gray-700">
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
