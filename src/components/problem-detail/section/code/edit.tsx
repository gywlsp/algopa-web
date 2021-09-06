import React from 'react';
import Editor, { OnChange } from '@monaco-editor/react';

import { ICode } from 'src/interfaces/code/ICode';

export type CodeEditSectionProps = Pick<ICode, 'language' | 'text'> & {
  onChange: OnChange;
};

export default function CodeEditSection({
  language,
  text,
  onChange,
}: CodeEditSectionProps) {
  return (
    <Editor
      className="code-editor"
      options={{ fontSize: '14px' }}
      theme="vs-dark"
      height="calc(100% - 30rem)"
      language={language}
      value={text}
      onChange={onChange}
    />
  );
}
