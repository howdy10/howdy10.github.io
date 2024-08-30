import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '@site/src/components/AboutMe';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'A Software Developer',
              1000,
              'A Software Engineer',
              1000,
              'A Software Engineer Like No Other',
              500,
            ]}
            speed={40}
            cursor={false}
          />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Esaul Campos`} description="This is my personal site">
      <HomepageHeader />
      <main>
        <AboutMe />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
