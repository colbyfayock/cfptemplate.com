import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';
import Details from 'components/Details';
import Video from 'components/Video';
import Form from 'components/Form';
import SectionAuthor from 'components/SectionAuthor';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Section>
        <Container>
          <h1 className={styles.homeTitle}>
            { siteName }
          </h1>

          <p className={styles.homeSubtitle}>
            Get started today!
          </p>

          <p className={styles.homeAction}>
            <Button>Get Started</Button>
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Video width="560" height="315" src="https://www.youtube.com/embed/QjZIeA952jE" />
        </Container>
      </Section>

      <FeatureList features={[
        '🤔 What is it?',
        '💪 What makes it so awesome?',
        '😢 What isn\'t it great at?'
      ]} />

      <Section>
        <Container>
          <Details>
            <summary>
              What to expect?
            </summary>
            <p>
              In summary...
            </p>
          </Details>
        </Container>
      </Section>

      <Section className={styles.homeSectionForm}>
        <Container>
          <h2>
            Susbcribe to My Newsletter
          </h2>
          <p>
            Get free weekly tutorials straight to your inbox!
          </p>
          <Form action="https://colbyfayock.com/newsletter">
            <p>
              <input name="email_address" aria-label="Your email address" placeholder="Your email address" required type="email" />
            </p>
            <p>
              <Button>
                Get Free Tutorials
              </Button>
            </p>
          </Form>
        </Container>
      </Section>

      <SectionAuthor />

    </Layout>
  )
}
