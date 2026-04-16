import WorkHero from '@/components/WorkHero';
import WorkServices from '@/components/WorkServices';
import WorkPayroll from '@/components/WorkPayroll';
import WorkTpDoc from '@/components/WorkTpDoc';
import WorkOutcomes from '@/components/WorkOutcomes';
import WorkStats from '@/components/WorkStats';
import ScrollReveal from '@/components/ScrollReveal';

/**
 * Our Work Page
 * Showcases the firm's track record and expertise.
 */
export default function WorkPage() {
  return (
    <main className="page-transition">
      <ScrollReveal>
        <WorkHero />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <WorkServices />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <WorkPayroll />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <WorkTpDoc />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <WorkOutcomes />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <WorkStats />
      </ScrollReveal>
    </main>
  );
}
