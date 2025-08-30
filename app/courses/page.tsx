// lms-web/app/courses/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  description: string;
  lessons: string[];
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");
        const data: Course[] = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return <p className="p-6">Loading courses...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">
        📘 Available Courses
      </h1>

      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="space-y-6">
          {courses.map((course) => (
            <li
              key={course.id}
              className="course-card transform hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              <Link href={`/courses/${course.id}`}>
                <h2 className="text-2xl font-semibold text-indigo-700 hover:underline">
                  {course.title}
                </h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <p className="mt-3 text-sm font-medium text-gray-500">
                  📚 Lessons: {course.lessons.length}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
