import {
  Achievements,
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Timeline,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home',
  description:
    'Architecting reliable infrastructure for the AI-driven era with production-ready software, AI systems, and rapid execution.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Achievements />
        <Timeline />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
