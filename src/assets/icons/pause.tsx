import { IconProps } from '../icons';
import { GREY } from 'src/constants/colors';

export default function PauseIcon({ style = {}, fill = GREY[900] }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 298.667 298.667"
      style={{ width: '29.8rem', height: '29.8rem', ...style }}
      fill={fill}
    >
      <rect x="192" y="0" width="85.333" height="298.667" />
      <rect x="21.333" y="0" width="85.333" height="298.667" />
    </svg>
  );
}
