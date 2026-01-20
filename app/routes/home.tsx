import type { Route } from "./+types/home";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  GitHub,
  Contact,
  Footer,
} from "~/components";
import { personalInfo } from "~/data/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${personalInfo.name} | Software Engineer` },
    {
      name: "description",
      content: personalInfo.tagline,
    },
    { name: "author", content: personalInfo.name },
    { property: "og:title", content: `${personalInfo.name} | Software Engineer` },
    { property: "og:description", content: personalInfo.tagline },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${personalInfo.name} | Software Engineer` },
    { name: "twitter:description", content: personalInfo.tagline },
    { name: "theme-color", content: "#000000" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  // SSR data loading - can be extended to fetch data from APIs or databases
  return {
    personalInfo,
    timestamp: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
