import React from 'react';
import Editor from '@monaco-editor/react';

import { ICode } from 'src/interfaces/code/ICode';

export type CodeEditSectionProps = Pick<ICode, 'language' | 'text'>;

export default function CodeEditSection({
  language,
  text,
}: CodeEditSectionProps) {
  return (
    <Editor
      className="code-editor"
      options={{ fontSize: '14px' }}
      theme="vs-dark"
      height="calc(100% - 30rem)"
      language={language}
      value={text}
    />
  );
}
