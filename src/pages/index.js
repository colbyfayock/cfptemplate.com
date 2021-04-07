import { Helmet } from 'react-helmet';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';
import Details from 'components/Details';
import Video from 'components/Video';
import Form from 'components/Form';
import FormRow from 'components/FormRow';
import SectionAuthor from 'components/SectionAuthor';

import cfpTemplatePreview from 'images/cfp-template-preview.png';

import styles from 'styles/App.module.scss';

export default function Home() {
  const { metadata } = useSite();
  const { siteName, form } = metadata;

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Section className={styles.homeHeroSection}>
        <Container className={styles.homeHeroContainer}>
          <div className={styles.homeHeroContent}>
            <h1 className={styles.homeTitle}>
              { siteName }
            </h1>

            <p className={styles.homeSubtitle}>
              Organize and DRY up submitting your conference proposals!
            </p>

            <Form className={styles.homeHeroForm} action={`https://app.convertkit.com/forms/${form.actionId}/subscriptions`}>
              <FormRow>
                <p>
                  Get the <strong>FREE</strong> template straight to your inbox.
                </p>
              </FormRow>
              <div className={styles.homeHeroFormInputs}>
                <FormRow>
                  <input name="email_address" aria-label="Your email address" placeholder="Email Address" required type="email" />
                </FormRow>
                <FormRow>
                  <Button>
                    Download Free
                  </Button>
                </FormRow>
              </div>
            </Form>
          </div>

          <div className={styles.homeHeroImage}>
            <img src={cfpTemplatePreview} alt="CFP Template Preview" />
          </div>
        </Container>
      </Section>

      <FeatureList features={[
        '🤔 What is it?',
        '💪 What makes it so awesome?',
        '😢 What isn\'t it great at?'
      ]} />

      <Section className={styles.homeSectionForm}>
        <Container>
          <h2>
            Get your copy!
          </h2>

          <Form action={`https://app.convertkit.com/forms/${form.actionId}/subscriptions`}>
            <FormRow>
              <p>
                Get the <strong>FREE</strong> template straight to your inbox.
              </p>
            </FormRow>
            <div className={styles.homeHeroFormInputs}>
              <FormRow>
                <input name="email_address" aria-label="Your email address" placeholder="Email Address" required type="email" />
              </FormRow>
              <FormRow>
                <Button>
                  Download Free
                </Button>
              </FormRow>
            </div>
          </Form>
        </Container>
      </Section>

      <SectionAuthor />

    </Layout>
  )
}
