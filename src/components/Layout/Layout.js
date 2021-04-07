import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';

import useSite from 'hooks/use-site';

import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ShareAnchor from 'components/ShareAnchor';

const Layout = ({ children, displayNav = true, displayShare = true }) => {
  const { metadata = {} } = useSite();
  const { siteName, homepage } = metadata;

  const pageTitle = siteName;

  const metaDescription = 'Organize and DRY up submitting your conference proposals!';

  const ogImage = `${homepage}/cfp-template-social.jpg`;

  const helmetSettings = {
    defaultTitle: pageTitle,
    titleTemplate: `%s - ${pageTitle}`
  }

  return (
    <div className={styles.layoutContainer}>
      <Helmet {...helmetSettings}>
        <html lang="en" />

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={homepage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content={homepage} />
        <meta property="twitter:creator" content="@colbyfayock" />

      </Helmet>

      { displayNav && <Nav />}

      <Main>{ children }</Main>

      <div>
        { displayShare && <ShareAnchor /> }
        <Footer />
      </div>
    </div>
  )
}

export default Layout;