import { Helmet } from 'react-helmet';
import { FaMarkdown, FaFilePdf, FaGoogleDrive, FaFileWord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

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

      <Section className={styles.homeExpectSection}>
        <Container>
          <h2>What to expect?</h2>
          <ul>
            <li>
              <h3>Proposal Template</h3>
              <p>
                Optimized templates in multiple formats that let you focus on what makes your proposal unique.
              </p>
            </li>
            <li>
              <h3>Speaker Bio Template</h3>
              <p>
              Don’t get stuck searching for your headshot, start your proposal with all your information in one place.
              </p>
            </li>
            <li>
              <h3>CFP Guides</h3>
              <p>
                Learn how to make the best use of these templates along with some tips for what makes a good proposal.
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container className={styles.homeFormatsContainer}>
          <div className={styles.homeFormatsContent}>
            <h2>
              All the formats you’ve grown to love and expect like Notion,
              Markdown, and Google Docs.
            </h2>
            <p>
              Missing one? <a href="mailto:hello@colbyfayock.com">Let me know</a>!
            </p>
          </div>
          <div className={styles.homeFormatsLogos}>
            <ul>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <SiNotion />
                </span>
                <p>
                  Notion
                </p>
              </li>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <FaMarkdown />
                </span>
                <p>
                  Markdown
                </p>
              </li>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <FaGoogleDrive />
                </span>
                <p>
                  Google Docs
                </p>
              </li>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <FaFileWord />
                </span>
                <p>
                  MS Word
                </p>
              </li>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <FaFilePdf />
                </span>
                <p>
                  PDF
                </p>
              </li>
              <li>
                <span className={styles.homeFormatsLogosIcon}>
                  <IoDocumentText />
                </span>
                <p>
                  TextBundle
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className={styles.homeDownloadSection}>
        <Container>
          <h2>
            Grab your free copy!
          </h2>

          <Form action={`https://app.convertkit.com/forms/${form.actionId}/subscriptions`}>
            <FormRow>
              <p>
                Get the <strong>FREE</strong> template straight to your inbox.
              </p>
            </FormRow>
            <div className={styles.homeDownloadFormInputs}>
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
