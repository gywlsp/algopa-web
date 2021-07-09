import { BLACK } from 'src/constants/colors';
import { IconProps } from '..';

export default function ChevronLeftIcon({
  style = {},
  fill = BLACK,
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="13.76 20.02 3.5 10.01 13.76 0 14.8 1.07 5.64 10.01 14.8 18.95 13.76 20.02" />
    </svg>
  );
}
