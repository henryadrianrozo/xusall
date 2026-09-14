import { CONTACT_EMAIL } from '@/lib/site';

// The XUsContacts privacy policy. This is the URL registered on the App Store
// Connect listing, so the path is load-bearing: do not rename or move it
// without updating the listing too.
const DESCRIPTION =
  'XUsContacts privacy policy. No accounts, no advertising, no analytics, and no tracking. Your contacts, your archive and your Instagram imports stay on your iPhone.';

export const metadata = {
  title: 'XUsContacts Privacy Policy',
  description: DESCRIPTION,
  alternates: { canonical: '/xuscontacts/privacy' },
  openGraph: {
    title: 'XUsContacts Privacy Policy | XUsAll',
    description: DESCRIPTION
  },
  twitter: {
    title: 'XUsContacts Privacy Policy | XUsAll',
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

export default function XUsContactsPrivacy() {
  return (
    <div className="page-shell">
      <section className="policy-hero">
        <span className="eyebrow">XUsContacts</span>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: September 2026</p>
        <p className="policy-lead">
          XUsContacts is a contact manager for your iPhone. It organizes, tags and archives the
          contacts already on your phone, and everything it keeps stays on your phone.
        </p>
      </section>

      <div className="policy-body">
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>
            XUsContacts does not collect any information. There is no account, no sign in, and no
            server of ours that your data is sent to. We never see your contacts or anything else
            you do in the app.
          </p>
        </section>

        <section className="policy-section">
          <h2>Access to Your Contacts</h2>
          <p>
            XUsContacts asks for access to your contacts so it can show them, let you edit them,
            and archive the people you choose to remove. Contacts are read and changed on your
            device through iOS&rsquo;s own Contacts framework, and they stay wherever they
            already live, such as iCloud, Google or your iPhone.
          </p>
          <p>
            You can change or remove this access at any time in iOS Settings. If you share only
            some of your contacts, archiving is turned off, because the app cannot then find every
            copy of a person to archive them safely.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information Stored on Your Device</h2>
          <p>To provide its features, XUsContacts stores the following locally on your iPhone:</p>
          <List
            items={[
              'Archived contacts, saved as a full copy before they are removed from your phone',
              'Tags, locations and notes you add to contacts',
              'Your organizing decisions, such as who you kept, hid or added to your safe list',
              'Your own contact cards and their QR code settings',
              'Instagram follower and following lists you choose to import',
              'App preferences, including birthday reminder timing'
            ]}
          />
          <p>
            Like other app data, this information can be included in your own iPhone backups to
            iCloud or a computer, which are governed by Apple&rsquo;s privacy practices. Imported
            Instagram lists are excluded from those backups.
          </p>
        </section>

        <section className="policy-section">
          <h2>Instagram Imports</h2>
          <p>
            You can import the data export Instagram provides to you. XUsContacts reads only the
            followers and following files from that export, on your device, and ignores
            everything else in it. XUsContacts never signs in to Instagram, never asks for your
            Instagram password, and cannot follow, unfollow or remove anyone. Opening a profile
            simply opens Instagram or your browser.
          </p>
        </section>

        <section className="policy-section">
          <h2>Sharing Your Contact Card</h2>
          <p>
            Your contact cards are shared only when you choose to: when someone scans your QR
            code, or when you send your card with the iOS share sheet. The QR code contains the
            details you put on that card and nothing else.
          </p>
        </section>

        <section className="policy-section">
          <h2>Asking Someone for Their Details</h2>
          <p>
            When a contact is missing a birthday, address, email or phone number, XUsContacts can
            draft a text or email asking them for it. The message opens in Messages or Mail for
            you to review and send yourself. XUsContacts never sends anything on your behalf.
          </p>
        </section>

        <section className="policy-section">
          <h2>Notifications</h2>
          <p>
            If you turn on birthday reminders, XUsContacts schedules local notifications on your
            device using iOS&rsquo;s own notification system. They are not push notifications and
            do not require a server.
          </p>
        </section>

        <section className="policy-section">
          <h2>Backups and Exports</h2>
          <p>
            You can export your archive and contacts as a backup file or as standard vCard files
            at any time. A backup can be protected with a password you choose. Where an export
            goes depends entirely on where you save or send it. XUsContacts never uploads a backup
            anywhere on its own.
          </p>
        </section>

        <section className="policy-section">
          <h2>Analytics and Tracking</h2>
          <p>XUsContacts does not use:</p>
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
        </section>

        <section className="policy-section">
          <h2>Advertising</h2>
          <p>XUsContacts does not display advertisements.</p>
        </section>

        <section className="policy-section">
          <h2>Data Sharing and Sale</h2>
          <p>
            XUsContacts does not sell, share or transfer your contacts or any other information,
            because it never receives them.
          </p>
        </section>

        <section className="policy-section">
          <h2>Deleting Your Data</h2>
          <p>
            You can restore or permanently delete archived contacts, empty the Trash, and clear
            your Instagram imports inside the app. Deleting XUsContacts from your iPhone removes
            everything it stored. Your contacts in iCloud, Google or other accounts are not
            affected by removing the app.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children&rsquo;s Privacy</h2>
          <p>
            XUsContacts is not directed toward children under 13 and does not knowingly collect
            personal information from children.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect app improvements,
            legal requirements, or operational changes. Updates will be posted on this page with
            a revised date.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact</h2>
          <p>For questions regarding this Privacy Policy or support with the app, please contact:</p>
          <p className="policy-contact-name">XUsAll</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline-link">
            {CONTACT_EMAIL}
          </a>
        </section>
      </div>
    </div>
  );
}
