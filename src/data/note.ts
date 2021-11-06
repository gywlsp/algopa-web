import BoldIcon from 'src/assets/icons/bold';
import CodeIcon from 'src/assets/icons/code';
import BulletedListIcon from 'src/assets/icons/list/bulleted';
import NumberedListIcon from 'src/assets/icons/list/numbered';
import QuoteIcon from 'src/assets/icons/quote';
import UnderlineIcon from 'src/assets/icons/underline';

export const DRAFT_INLINE_STYLES = ['BOLD', 'CODE', 'UNDERLINE']; // | 'ITALIC' | 'STRIKETHROUGH'
export const DRAFT_BLOCK_STYLES = [
  'unstyled',
  'header-one',
  'header-two',
  'header-three',
  'unordered-list-item',
  'ordered-list-item',
  'blockquote',
  'code-block',
]; // | 'paragraph' | 'header-four' | 'header-five' | 'header-six' | 'atomic'

export const DRAFT_STYLE_BUTTONS = [
  { title: 'H1', value: 'header-one' },
  { title: 'H2', value: 'header-two' },
  { title: 'H3', value: 'header-three' },
  { Icon: BulletedListIcon, value: 'unordered-list-item' },
  { Icon: NumberedListIcon, value: 'ordered-list-item' },
  { Icon: QuoteIcon, value: 'blockquote' },
  { Icon: CodeIcon, value: 'code-block' },
  { Icon: BoldIcon, value: 'BOLD' },
  { Icon: UnderlineIcon, value: 'UNDERLINE' },
];
