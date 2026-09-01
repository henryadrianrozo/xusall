import { CONTACT_EMAIL } from '@/lib/site';

// The XUsMemories privacy policy. This is the URL registered on the App
// Store Connect listing and linked from the app's own About screen, so the
// path is load-bearing: do not rename or move it without updating both.
const DESCRIPTION =
  'XUsMemories privacy policy. No accounts, no advertising, no analytics, and no behavioral tracking. Memories stay on your device and sync only through your own private iCloud account.';

export const metadata = {
  title: 'XUsMemories Privacy Policy',
  description: DESCRIPTION,
  alternates: { canonical: '/xusmemories/privacy' },
  openGraph: {
    title: 'XUsMemories Privacy Policy | XUsAll',
    description: DESCRIPTION
  },
  twitter: {
    title: 'XUsMemories Privacy Policy | XUsAll',
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

export default function XUsMemoriesPrivacy() {
  return (
    <div className="page-shell">
      <section className="policy-hero">
        <span className="eyebrow">XUsMemories</span>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: August 2026</p>
        <p className="policy-lead">
          XUsMemories is a private video diary. It saves memories on your device first and
          synchronizes them through your own private iCloud account when it&rsquo;s available.
        </p>
      </section>

      <div className="policy-body">
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>XUsMemories does not collect personal information such as:</p>
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
          <h2>Camera and Microphone</h2>
          <p>
            XUsMemories uses your device&rsquo;s camera and microphone only when you choose to
            start recording a memory. Recording never starts automatically. The resulting video
            can contain your face, your voice, your surroundings, and anything else you choose to
            record.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information Stored on Your Device</h2>
          <p>
            To provide app functionality, XUsMemories stores certain information locally on your
            device, including:
          </p>
          <List
            items={[
              'Recorded video and its recording date',
              'Title, notes, entry type, and tags you add',
              'The diary a memory is optionally filed under',
              'Favorite and deletion state',
              'Technical recording details and an integrity checksum',
              'App preferences, including recording quality, appearance, reminders, and optional device lock'
            ]}
          />
        </section>

        <section className="policy-section">
          <h2>Private iCloud Synchronization</h2>
          <p>
            XUsMemories uses Apple&rsquo;s CloudKit service to privately mirror your videos and
            their metadata in the private CloudKit database associated with your own iCloud
            account, so your memories can stay in sync across your own devices.
          </p>
          <p>
            This data is governed by your Apple account and Apple&rsquo;s own privacy practices,
            and it counts toward your iCloud storage. XUsMemories does not operate a separate
            account system or a company-run video server, and it never places a memory in a
            public CloudKit database.
          </p>
        </section>

        <section className="policy-section">
          <h2>Notifications</h2>
          <p>XUsMemories can schedule optional local reminder notifications if you turn that on.</p>
          <p>
            Reminders are generated entirely on your device using iOS&rsquo;s own notification
            system. They are not push notifications and do not require a server.
          </p>
        </section>

        <section className="policy-section">
          <h2>Analytics and Tracking</h2>
          <p>XUsMemories does not use:</p>
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
          <p>No information about your use of the app is sent to analytics or marketing providers.</p>
        </section>

        <section className="policy-section">
          <h2>Advertising</h2>
          <p>XUsMemories does not display advertisements.</p>
        </section>

        <section className="policy-section">
          <h2>Device Authentication</h2>
          <p>
            If you turn on the optional device lock, authentication is performed entirely by iOS
            using Face ID, Touch ID, or your device passcode. XUsMemories never receives or
            stores your biometric data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Exporting Your Archive</h2>
          <p>
            You can export a single memory or your whole archive at any time, as ordinary video
            and JSON files, using iOS&rsquo;s own share sheet. Where an export goes after that
            depends entirely on where you choose to send it. XUsMemories never exports your
            archive automatically.
          </p>
        </section>

        <section className="policy-section">
          <h2>Deletion</h2>
          <p>
            Deleting a memory moves it to Recently Deleted for 30 days, during which you can
            restore it. Permanent deletion, whether you choose it yourself or the 30 days pass,
            removes the memory and its video for good.
          </p>
          <p>
            A small marker containing only the memory&rsquo;s random identifier and the date it
            was deleted is kept afterward, so an offline device cannot accidentally bring back
            something you already deleted for good.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Sharing and Sale</h2>
          <p>XUsMemories does not sell personal information.</p>
          <p>
            XUsMemories does not share your memories or their metadata with advertisers, data
            brokers, or marketing companies.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Choices</h2>
          <p>
            You can view and edit a memory&rsquo;s title, notes, tags, diary, and favorite state;
            export your archive; restore or permanently delete a memory; and turn off
            XUsMemories&rsquo; iCloud access at any time in iOS Settings. Recording and playback
            keep working entirely on your device either way.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children&rsquo;s Privacy</h2>
          <p>
            XUsMemories is not directed toward children under 13 and does not knowingly collect
            personal information from children.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect app improvements,
            legal requirements, or operational changes. Updates will be posted on this page with
            a revised effective date.
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
