type Props = { size?: number; tone?: 'dark' | 'light' };

export default function Logo({ size = 42, tone = 'dark' }: Props) {
  const disc = tone === 'dark' ? '#24351C' : '#F5EBDD';
  const nut = tone === 'dark' ? '#F5EBDD' : '#182515';

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="BIONUTZ">
      <circle cx="60" cy="60" r="56" fill={disc} />
      <circle cx="45" cy="60" r="21" fill={nut} />
      <circle cx="75" cy="60" r="25" fill={nut} />
      <circle cx="45" cy="60" r="21" fill="none" stroke={disc} strokeWidth="3" />
    </svg>
  );
}
