import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { TechStack } from '../components/sections/TechStack';
import { Work } from '../components/sections/Work';
import { Trust } from '../components/sections/Trust';
import { Section } from '../components/ui/Section';

export const Home = () => {
  return (
    <main className="bg-webuddy-dark min-h-screen">
      <Hero />

      <Section>
        <Trust />
      </Section>

      <Section>
        <Services />
      </Section>

      <Section>
        <Work />
      </Section>

      <Section>
        <TechStack />
      </Section>
    </main>
  );
};
