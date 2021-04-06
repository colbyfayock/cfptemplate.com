import { FaTwitter } from 'react-icons/fa';

import ClassName from 'models/classname';
import useSite from 'hooks/use-site';
import { createTweetAction, openTweet } from '../../lib/social';

import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';

import styles from './ShareAnchor.module.scss';

const twitterAction = createTweetAction({
  message: [`Yo, @colbyfayock - this is cool!`]
});

const ShareAnchor = ({ children, className, backgroundColor = 'primary' }) => {
  const { metadata } = useSite();
  const { siteName } = metadata;

  const shareAnchorClassName = new ClassName(styles.shareAnchor);

  shareAnchorClassName.addIf(className, className);

  /**
   * handleOnTwitterClick
   */

  function handleOnTwitterClick(e) {
    e.preventDefault();
    openTweet({
      message: twitterAction
    })
  }

  return (
    <Section className={shareAnchorClassName.toString()} backgroundColor={backgroundColor}>
      <Container className={styles.shareAnchorContainer}>
        { children || <h3>Love {siteName}?</h3> }
        <p className={styles.shareAnchorActions}>
          <Button className={styles.shareAnchorButton} onClick={handleOnTwitterClick}>
            <FaTwitter /> Share on Twitter
          </Button>
        </p>
      </Container>
    </Section>
  )
}

export default ShareAnchor;