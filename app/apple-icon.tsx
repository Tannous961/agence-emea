import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          background: '#111111',
          color: '#F5F5F0',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em' }}>B&amp;B</div>
        <div style={{ width: 56, height: 6, background: '#0000FF', marginTop: 8 }} />
      </div>
    ),
    { ...size },
  );
}
