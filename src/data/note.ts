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
  { title: 'BLOCKQUOTE', value: 'blockquote' },
  { title: 'UL', value: 'unordered-list-item' },
  { title: 'OL', value: 'ordered-list-item' },
  { title: 'CODEBLOCK', value: 'code-block' },
  { title: 'BOLD', value: 'BOLD' },
  { title: 'UNDERLINE', value: 'UNDERLINE' },
  { title: '</>', value: 'CODE' },
];
