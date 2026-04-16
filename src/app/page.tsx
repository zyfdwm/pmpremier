import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Standards from '@/components/Standards';
import Insights from '@/components/Insights';
import CtaBanner from '@/components/CtaBanner';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Standards />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Insights />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <CtaBanner />
      </ScrollReveal>
    </main>
  );
}
