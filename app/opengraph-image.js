import { ImageResponse } from 'next/og';

// Social share preview card (iMessage, Slack, X, Facebook, etc.)
//
// Deliberately NOT `runtime = 'edge'`. Edge opts the route out of static
// generation, so the image would render on every request instead of once at
// build time, and slow social crawlers sometimes give up rather than wait.
export const alt = 'XUsAll: free software, built for people over profit';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SPECTRUM = ['#FF4D6D', '#FF9F43', '#FFD93D', '#4ADE80', '#38BDF8', '#A78BFA'];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 128,
            fontWeight: 500,
            letterSpacing: '-0.04em',
            color: '#f5f6f8'
          }}
        >
          XUsAll
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#f5f6f8'
          }}
        >
          Connection. People. Progress.
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 24,
            color: '#9ba1ac'
          }}
        >
          Free software for everyone, built for people instead of profit.
        </div>
        <div style={{ display: 'flex', marginTop: 44, gap: 14 }}>
          {SPECTRUM.map((color) => (
            <div
              key={color}
              style={{ width: 14, height: 14, borderRadius: 999, background: color }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
