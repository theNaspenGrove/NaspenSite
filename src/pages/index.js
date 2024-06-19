import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import MessageOfTheMoment from '../components/MOTM/MOTM';

import HomeContent from './HomeContent.mdx';

import Container from '../components/Layout/Container';
import Row from '../components/Layout/Row';
import Col from '../components/Layout/Col';

import MDXContent from '@theme/MDXContent';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <img src="/img/light-logo-no-bg.svg" style={{width: '1em'}}/>{siteConfig.title}
        </Heading>
        <p className="hero__subtitle"><MessageOfTheMoment/></p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <MDXContent>
        <Container>
          <Row>
            <Col>
            
              <HomeContent />

            </Col>
          </Row>
        </Container>
      </MDXContent>
    </Layout>
  );
}
