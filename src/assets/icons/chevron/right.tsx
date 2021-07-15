import { GREY } from 'src/constants/colors';
import { IconProps } from '..';

export default function ChevronRightIcon({
  style = {},
  fill = GREY[800],
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="5.09 20.02 4.05 18.95 13.21 10.01 4.05 1.07 5.09 0 15.36 10.01 5.09 20.02" />
    </svg>
  );
}
