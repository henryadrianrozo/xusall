import { CONTACT_EMAIL } from '@/lib/site';

// The XUsCurrency privacy policy. This is the URL registered on the Play
// Console listing and linked from the app's Settings screen, so the path is
// load-bearing: do not rename or move it without updating both.
//
// It lived on the personal portfolio until now, which meant tapping Privacy
// Policy in the app landed you on somebody's resume. It belongs with the
// product.
const DESCRIPTION =
  'XUsCurrency privacy policy. No accounts, no advertising, no analytics, and no behavioral tracking. All app data stays on your device.';

export const metadata = {
  title: 'XUsCurrency Privacy Policy',
  description: DESCRIPTION,
  alternates: { canonical: '/xuscurrency/privacy' },
  openGraph: {
    title: 'XUsCurrency Privacy Policy | XUsAll',
    description: DESCRIPTION
  },
  twitter: {
    title: 'XUsCurrency Privacy Policy | XUsAll',
    description: DESCRIPTION
  }
};

function List({ items }) {
  return (
    <ul className="policy-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function XUsCurrencyPrivacy() {
  return (
    <div className="page-shell">
      <section className="policy-hero">
        <span className="eyebrow">XUsCurrency</span>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: July 2026</p>
        <p className="policy-lead">
          XUsCurrency is designed to be simple, private, and transparent. This app does not
          require an account, does not contain advertising, and does not use behavioral tracking.
        </p>
      </section>

      <div className="policy-body">
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>XUsCurrency does not collect personal information such as:</p>
          <List
            items={[
              'Name',
              'Email address',
              'Phone number',
              'Physical address',
              'Precise location',
              'Contacts',
              'Device identifiers',
              'Advertising identifiers'
            ]}
          />
          <p>The app does not create user accounts and does not maintain user profiles.</p>
        </section>

        <section className="policy-section">
          <h2>Information Stored on Your Device</h2>
          <p>
            To provide app functionality, XUsCurrency stores certain information locally on your
            device, including:
          </p>
          <List
            items={[
              'Tracked currency pairs and alert settings',
              'Tracking history and alert activity',
              'Recently used currencies',
              'Exchange-rate cache data',
              'Historical-rate cache data',
              'App preferences and settings',
              'Converter state and last-selected currencies'
            ]}
          />
          <p>
            This information remains on your device and is not transmitted to XUsCurrency or any
            company-controlled server.
          </p>
        </section>

        <section className="policy-section">
          <h2>Exchange Rate Data</h2>
          <p>
            XUsCurrency retrieves exchange-rate information from the free and open-source
            fawazahmed0/currency-api project.
          </p>
          <p>
            Requests are made to publicly available endpoints and do not include personal
            information, account identifiers, or user-generated content.
          </p>
          <p>
            Like any internet request, your device&rsquo;s IP address may be visible to the network
            providers involved in delivering the data, but XUsCurrency does not collect, store, or
            process that information.
          </p>
        </section>

        <section className="policy-section">
          <h2>Notifications</h2>
          <p>XUsCurrency can generate local notifications for currency alerts that you configure.</p>
          <p>
            Notifications are generated entirely on your device using Android&rsquo;s background
            scheduling system. They are not push notifications and do not require a server.
          </p>
        </section>

        <section className="policy-section">
          <h2>Analytics and Tracking</h2>
          <p>XUsCurrency does not use:</p>
          <List
            items={[
              'Analytics SDKs',
              'Advertising SDKs',
              'Behavioral tracking',
              'Cross-app tracking',
              'Tracking pixels',
              'Crash-reporting services'
            ]}
          />
          <p>No information about your usage is sent to analytics or marketing providers.</p>
        </section>

        <section className="policy-section">
          <h2>Advertising</h2>
          <p>XUsCurrency does not display advertisements.</p>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>
          <p>The app relies on the following third-party technologies to function:</p>
          <List
            items={[
              'fawazahmed0/currency-api (exchange-rate data)',
              'Retrofit',
              'Gson',
              'Jetpack DataStore',
              'Android WorkManager',
              'Navigation Compose'
            ]}
          />
          <p>These technologies are used solely to provide app functionality.</p>
        </section>

        <section className="policy-section">
          <h2>Donations</h2>
          <p>
            XUsCurrency includes an optional link to Ko-fi for users who wish to support
            development.
          </p>
          <p>
            Any interaction with Ko-fi occurs directly between you and Ko-fi. XUsCurrency does not
            process payments, receive payment information, or receive personal information from
            Ko-fi.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Sharing and Sale</h2>
          <p>XUsCurrency does not sell personal information.</p>
          <p>
            XUsCurrency does not share personal information with advertisers, data brokers, or
            marketing companies.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Retention</h2>
          <p>All app data is stored locally on your device. Data remains available until:</p>
          <List
            items={[
              'You delete it within the app',
              "You clear the app's storage",
              'You uninstall the app'
            ]}
          />
          <p>
            Some historical tracking records may remain locally on the device after a tracked pair
            is removed so users can review prior activity.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children&rsquo;s Privacy</h2>
          <p>
            XUsCurrency is not directed toward children under 13 and does not knowingly collect
            personal information from children.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect app improvements, legal
            requirements, or operational changes. Updates will be posted on this page with a revised
            effective date.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact</h2>
          <p>For questions regarding this Privacy Policy, please contact:</p>
          <p className="policy-contact-name">XUsAll</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">
            {CONTACT_EMAIL}
          </a>
        </section>
      </div>
    </div>
  );
}
