import { IconProps } from '../../icons';
import { GREY } from 'src/constants/colors';

export default function ChevronDownIcon({
  style = {},
  fill = GREY[800],
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.99999 15.94L-0.0100098 5.68L1.05999 4.63L9.99999 13.79L18.94 4.63L20.01 5.68L9.99999 15.94Z" />
    </svg>
  );
}
