import Hero from "@/app/components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="h-screen flex flex-col gap-12">
        <About />
        <Contact />
      </div>
    </div>
  );
}
