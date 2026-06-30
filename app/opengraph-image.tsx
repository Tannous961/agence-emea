import { ImageResponse } from 'next/og';
import { BRAND } from '@/lib/constants/brand';

export const alt = `${BRAND.name} — Premium Digital Agency for the Middle East & Africa`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#111111',
          color: '#F5F5F0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 6, background: '#0000FF' }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#A8A8A8',
            }}
          >
            Middle East &amp; Africa
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              maxWidth: 900,
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#C8C8C8',
              maxWidth: 760,
            }}
          >
            {BRAND.tagline}
          </div>
        </div>

        <div style={{ fontSize: 24, color: '#666666', letterSpacing: '0.12em' }}>
          {BRAND.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
