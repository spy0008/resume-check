import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resuthing" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>
          Track Your Application & Resume Ratings
        </h1>
        <h2>
          Review your submissions and check AI-powered feedback
        </h2>
      </div>

      {
        resumes.length > 0 && (
          <div className="resumes-section">
            {
              resumes.map((resume: Resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))
            }
          </div>
        )
      }
    </section>

  </main>
}
