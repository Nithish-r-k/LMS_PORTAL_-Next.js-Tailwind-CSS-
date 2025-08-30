import { NextResponse } from "next/server";

const courses = [
  {
    id: "1",
    title: "React Basics",
    description: "Learn the basics of React.",
    lessons: ["JSX", "Components", "Props", "State"],
    quizzes: [
      {
        question: "What is JSX?",
        options: ["HTML", "JavaScript", "Both"],
      },
    ],
  },
  {
    id: "2",
    title: "Next.js Basics",
    description: "Learn the basics of Next.js.",
    lessons: ["Pages", "API Routes", "SSR", "Static Props"],
    quizzes: [
      {
        question: "Which is a Next.js feature?",
        options: ["SSR", "CLI", "Redux"],
      },
    ],
  },
];

// ✅ Handle GET request → return all courses
export async function GET() {
  return NextResponse.json(courses);
}
