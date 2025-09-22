import Head from 'next/head';
import Accomplishment from '../components/Accomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Publications from '../components/Publications/Publications';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <>
      <Head>
        <title>Fozle Rabbi Shafi | Portfolio</title>
        <meta name="description" content="Portfolio of Fozle Rabbi Shafi - PhD student, researcher, and software engineer specializing in Generative AI, Machine Learning, Cybersecurity, and Software Engineering." />
        <meta name="keywords" content="Fozle Rabbi Shafi, Portfolio, Generative AI, Machine Learning, Cybersecurity, Software Engineering, Research, Publications, Projects, Queen's University" />
        <meta name="author" content="Fozle Rabbi Shafi" />
        <meta property="og:title" content="Fozle Rabbi Shafi | Portfolio" />
        <meta property="og:description" content="Portfolio of Fozle Rabbi Shafi - PhD student, researcher, and software engineer specializing in Generative AI, Machine Learning, Cybersecurity, and Software Engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devshafi.github.io" />
        <meta property="og:image" content="/images/fozle-rabbi-shafi.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        {/* <Projects /> */}
        <Publications />
        <Technologies />
        <Timeline />
        <Accomplishment/>
      </Layout>
    </>
  );
};

export default Home;
