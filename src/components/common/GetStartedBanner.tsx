import styles from './GetStartedBanner.module.css';
import LinkButton from 'components/common/LinkButton';

export default function GetStartedBanner() {
  return (
    <div className={styles.banner}>
      <h1>Are you ready for better analytics?</h1>
      <div className={styles.buttons}>
        <LinkButton
          href="http://cloud.umami.is/signup?ref=get-started-banner"
          data-umami-event="get-started-banner-button"
          variant="primary"
          size="lg"
        >
          Get started
        </LinkButton>
      </div>
    </div>
  );
}