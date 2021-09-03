import { IconProps } from '../icons';
import { GREY } from 'src/constants/colors';

export default function PlayIcon({ style = {}, fill = GREY[900] }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      style={{ width: '51.2rem', height: '51.2rem', ...style }}
      viewBox="0 0 512 512"
      fill={fill}
    >
      <polygon points="29,0 483,256 29,512 	" />
    </svg>
  );
}
