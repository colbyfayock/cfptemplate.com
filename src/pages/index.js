import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
import CfpLogo from 'components/CfpLogo';



import styles from 'styles/App.module.scss';

export default function Home() {
  const { metadata } = useSite();
  const { siteName, form } = metadata;
  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target);
    const formAction = e.target.action;
    
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      const result = await response.json();
      if (result.success) {
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        } else {
          // Fallback to form redirect input or default with success params
          const redirectUrl = formData.get('redirect') || 'https://cfptemplate.com';
          window.location.href = `${redirectUrl}?status=success&message=Verification+email+sent+successfully`;
        }
      } else {
        throw new Error('Form submission error');
      }
    } catch (error) {
      // Show error banner for network errors
      setBanner({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const { status, message } = router.query;
    
    if (status === 'success') {
      setBanner({
        type: 'success',
        message: 'Check your inbox for a download link!'
      });
    } else if (status === 'error') {
      setBanner({
        type: 'error', 
        message: 'Something went wrong. Please try again.'
      });
    }
  }, [router.query]);

  return (
    <Layout displayNav={false}>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {banner && (
        <div className={`${styles.banner} ${styles[banner.type]}`}>
          <Container>
            <p>{banner.message}</p>
          </Container>
        </div>
      )}

      <Section className={styles.homeHeroSection}>
        <Container className={styles.homeHeroContainer}>
          <div className={styles.homeHeroContent}>
            <h1 className={styles.homeTitle}>
              <CfpLogo />
              { siteName }
            </h1>

            <p className={styles.homeSubtitle}>
              Organize and DRY up submitting your conference proposals!
            </p>

  
  

            <Form className={styles.homeHeroForm} action="https://mailtik.spacejelly.dev/api/forms/cfp-template" onSubmit={handleSubmit}>
              <input type="text" autoComplete="off" tabIndex={-1} style={{
                position: "absolute",
                left: "-9999px",
                width: "0",
                height: "0",
                border: "0",
                padding: "0",
                margin: "0",
                overflow: "hidden"
              }} name="phone" defaultValue="" readOnly />
              <input type="hidden" name="redirect" value="https://cfptemplate.com" />
              <input type="hidden" name="tags" value="location:spacejelly.dev,testtag" />
              <FormRow>
                <p>
                  Get the <strong>FREE</strong> template straight to your inbox.
                </p>
              </FormRow>
              <div className={styles.homeHeroFormInputs}>
                <FormRow>
                  <input name="email" aria-label="Your email address" placeholder="Email Address" required type="email" />
                </FormRow>
                <FormRow>
                  <Button loading={isLoading}>
                    Download Free
                  </Button>
                </FormRow>
              </div>
            </Form>
          </div>

          <div className={styles.homeHeroImage}>
            <img src="/images/cfp-template-preview.png" alt="CFP Template Preview" />
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

          <Form action="https://mailtik.spacejelly.dev/api/forms/cfp-template" onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" tabIndex={-1} style={{
              position: "absolute",
              left: "-9999px",
              width: "0",
              height: "0",
              border: "0",
              padding: "0",
              margin: "0",
              overflow: "hidden"
            }} name="phone" defaultValue="" readOnly />
            <input type="hidden" name="redirect" value="https://cfptemplate.com" />
            <input type="hidden" name="tags" value="location:spacejelly.dev,testtag" />
            <FormRow>
              <p>
                Get the <strong>FREE</strong> template straight to your inbox.
              </p>
            </FormRow>
            <div className={styles.homeDownloadFormInputs}>
              <FormRow>
                <input name="email" aria-label="Your email address" placeholder="Email Address" required type="email" />
              </FormRow>
              <FormRow>
                <Button loading={isLoading}>
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
