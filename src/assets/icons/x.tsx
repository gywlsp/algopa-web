import { IconProps } from '../icons';
import { GREY } from 'src/constants/colors';

export default function XIcon({ style = {}, fill = GREY[800] }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20 "
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9636 2.03709L17.9057 0.979185L9.9714 8.91349L2.05266 0.994756L0.994754 2.05266L8.91349 9.9714L0.979183 17.9057L2.03709 18.9636L9.9714 11.0293L17.9213 18.9792L18.9792 17.9213L11.0293 9.9714L18.9636 2.03709Z"
      />
    </svg>
  );
}
