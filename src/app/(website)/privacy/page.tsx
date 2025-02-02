import { Metadata } from 'next';
import PageHeader from 'components/layout/PageHeader';
import Privacy from './Privacy';

export default function PrivacyPage() {
  return (
    <article>
      <PageHeader>
        <h1>Privacy Policy</h1>
      </PageHeader>
      <Privacy />
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Privacy Policy',
};
