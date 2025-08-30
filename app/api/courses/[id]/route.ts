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

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const course = courses.find((c) => c.id === params.id);
  return NextResponse.json(course || { error: "Course not found" });
}
