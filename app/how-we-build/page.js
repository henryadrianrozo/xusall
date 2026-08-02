import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

const DESCRIPTION =
  'Every XUsAll product is made by one person working with AI tools. Here is the entire workflow, start to finish, written for someone with no technical background.';

export const metadata = {
  title: 'How We Build',
  description: DESCRIPTION,
  alternates: { canonical: '/how-we-build' },
  openGraph: {
    title: 'How We Build | XUsAll',
    description: DESCRIPTION
  },
  twitter: {
    title: 'How We Build | XUsAll',
    description: DESCRIPTION
  }
};

const STEPS = [
  {
    title: 'Think it through.',
    tool: '(Claude, ChatGPT)',
    body: 'Start with a conversation, not a keyboard. Talk the idea out with Claude or ChatGPT: what it is, who it is actually for, what the pieces are, where it will get hard. You come out with something professionals would call a product roadmap, which is really just an honest, ordered list of what has to exist before the thing works. This step is you thinking. The AI is there to keep you honest about what you have not considered yet.'
  },
  {
    title: 'Write the design prompt.',
    tool: null,
    body: 'Once the concept holds together, ask your thinking partner to write it up as a prompt for Claude Design. It sounds like a small step. It is the one that carries everything you just worked out into the tool that will draw it, so you are not starting again from a blank page and half a memory.'
  },
  {
    title: 'Design it, and keep the system.',
    tool: '(Claude Design)',
    body: 'Claude Design builds the actual screens: layout, type, color, the whole aesthetic. Iterate there until it looks the way you meant it to, because changing a design costs you an afternoon and changing a built app costs you a week. While you are in it, have it produce a design system, a single page holding your colors, type and components. Every later decision gets easier once that page exists.'
  },
  {
    title: 'Ask for the handoff.',
    tool: null,
    body: 'Claude Design will package the design into a handoff: a file with the code and the context a developer would need. That file is what you carry into wherever the real build happens, whether that is your terminal for a website, Android Studio for an Android app, or Xcode for an iPhone app.'
  },
  {
    title: 'Build it.',
    tool: '(Claude Code)',
    body: 'Claude Code works inside your terminal or development studio and does the coding. Give it the handoff and it does the heavy first pass. After that the job is yours again: use it, find what does not work, ask for changes, repeat. Most of your time goes here, and almost none of it is spent typing code. It is spent deciding what is right.'
  },
  {
    title: 'Save it, then put it online.',
    tool: null,
    body: 'Give Claude Code permission and it will push your work to Git, which is the cloud copy and full history of your project. From there we host on Vercel and recommend it: straightforward to set up, fair prices on domains, and in some cases Claude Code can deploy for you directly.'
  },
  {
    title: 'Ask what comes next.',
    tool: null,
    body: 'Publishing to an app store, pricing, support, whatever comes next: go back to your thinking partner and ask. That is the habit worth keeping. Ask plainly, keep asking until you genuinely understand the answer, and never assume a question is too basic to be worth asking.'
  }
];

export default function HowWeBuild() {
  return (
    <div className="page-shell">
      <section className="hwb-hero">
        <span className="eyebrow">How we build</span>
        <h1 className="hwb-title">Everything here was built with AI.</h1>
        <p className="hwb-intro">
          Every XUsAll product was made by one person working with generative AI tools. We say
          so plainly, because transparency has to cover the method and not just the result. What
          follows is the entire workflow, written for someone with no technical background. The
          information is already in your hands with Gen AI. The people who take the initiative to
          ask, to learn, and to act are the ones who end up making the products and ultimately the
          impact.
        </p>
      </section>

      <section className="section">
        <div className="hwb-cards">
          <div className="hwb-card">
            <h2>AI is an equalizer.</h2>
            <p>
              The distance between having an idea and being able to build it used to be years of
              training, or the money to hire somebody who had them. That distance is mostly gone
              now. Knowledge and creation both got cheaper, and that matters most for the people
              who were never let into the room.
            </p>
          </div>
          <div className="hwb-card">
            <h2>What we actually use.</h2>
            <p>
              No hidden stack. Claude and ChatGPT as thinking partners. Claude Design for the
              design work. Claude Code for the build. Git for history, Vercel for hosting. A paid
              Claude subscription is the only real cost on our end, and it is what makes all of
              this possible for one person.
            </p>
          </div>
          <div className="hwb-card">
            <h2>Why we publish it.</h2>
            <p>
              Putting real capability in people&apos;s hands is the whole point. A workflow kept
              private is just another closed door, and there are enough of those already. Take it
              and build your own X in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The workflow</h2>
        <p className="workflow-intro">
          Seven steps, start to finish. None of them require you to already know how to code, and
          none of them are the difficult part. The difficult part is caring about the idea long
          enough to finish it.
        </p>

        <div>
          {STEPS.map((step, i) => (
            <div className="workflow-step" key={step.title}>
              <span className="workflow-step__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="workflow-step__title">
                {step.title}
                {step.tool ? <span className="workflow-step__tool">{step.tool}</span> : null}
              </h3>
              <p className="workflow-step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section hwb-closer">
        <div className="spectrum-hairline quote-divider" />
        <p className="hwb-closer-quote">
          Technical skill is no longer a barrier to building what you want.{' '}
          <span className="muted">
            Everyone now has the ability to create the products and impact they want, regardless
            of their background.
          </span>
        </p>
        <div className="hwb-closer-links">
          <Link href="/#products">See what we&apos;ve built</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-copyright">© 2026 XUsAll</span>
          <Link href="/" className="footer-link">
            Home
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
