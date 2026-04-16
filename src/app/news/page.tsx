import NewsHero from '@/components/NewsHero';
import RegulationSlider from '@/components/RegulationSlider';
import NewsList from '@/components/NewsList';
import ScrollReveal from '@/components/ScrollReveal';

/**
 * News & Articles Page
 * Showcases editorial insights and firm updates.
 */
export default function NewsPage() {
  return (
    <main className="page-transition">
      <ScrollReveal>
        <NewsHero />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <RegulationSlider />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <NewsList />
      </ScrollReveal>
    </main>
  );
}
