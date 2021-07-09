import { IconProps } from '..';
import { BLACK } from 'src/constants/colors';

export default function ChevronUpIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.94 15.39L9.99999 6.22999L1.05999 15.39L-0.0100098 14.34L9.99999 4.07999L20.01 14.34L18.94 15.39Z" />
    </svg>
  );
}
