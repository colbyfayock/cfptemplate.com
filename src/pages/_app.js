import { useEffect } from 'react';
import { useRouter } from 'next/router';

import siteConfig from '../../site.config';

import SiteContext from 'context/site-context';
import { pageview } from 'lib/gtag';

const context = {
  metadata: siteConfig
}

import 'styles/globals.scss';

function App({ Component, pageProps }) {
  const router = useRouter();

  /**
   * handleRouteChange
   */

  function handleRouteChange(url) {
    pageview(url);
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SiteContext.Provider value={context}>
      <Component {...pageProps} />
    </SiteContext.Provider>
  );
}

export default App;