import Link from 'next/link';
import { Helmet } from 'react-helmet';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Details from 'components/Details';

import styles from 'styles/App.module.scss';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Section className={styles.gettingStartedSection}>
        <Container>
          <h1>Check your inbox!</h1>
          <p>
            You should receive an email within a few minutes that includes a big button
            to download your templates.
          </p>
          <p>
            <Link href="/">
              <a>
                Back to Home
              </a>
            </Link>
          </p>
        </Container>
      </Section>

      <Section className={styles.gettingStartedSection} backgroundColor="secondary">
        <Container>
          <h2>Common Questions</h2>

          <Details>
            <summary>
              <h3>Didn't get an email?</h3>
            </summary>

            <p>
              If you never received an email, first try checking your Spam folder or your Promotions tab.
            </p>

            <p>
              If you still can't find it, did you sign up for a previous version of the ebook?
              Try searching in your email's Trash folder. The system I'm using to distribute this
              unfortunately can't send more than one download link between versions.
            </p>

            <p>
              If you've tried all of the above and it's been longer than 15 minutes, feel free to
              shoot me an email at <a href="mailto:hello@colbyfayock.com">hello@colbyfayock.com</a> and
              I'll send you a copy!
            </p>
          </Details>
        </Container>
      </Section>

    </Layout>
  )
}
