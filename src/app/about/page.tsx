import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import AboutVision from "@/components/AboutVision";
import AboutLeadership from "@/components/AboutLeadership";
import AboutCta from "@/components/AboutCta";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="page-transition">
      <ScrollReveal>
        <AboutHero />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutStory />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutValues />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutVision />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutLeadership />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <AboutCta />
      </ScrollReveal>
    </main>
  );
}
