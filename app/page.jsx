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
  title: 'Home | Dennis Snellenberg',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
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
