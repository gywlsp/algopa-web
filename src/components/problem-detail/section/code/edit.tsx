import React from 'react';
import Editor from '@monaco-editor/react';

import { useSelectedCodeEdit } from 'src/hooks/api/code';

export default function CodeEditSection() {
  const { code, text, onChange } = useSelectedCodeEdit();

  return (
    <Editor
      className="code-editor"
      options={{ fontSize: '14px' }}
      theme="vs-dark"
      height="calc(100% - 30rem)"
      language={code?.language}
      value={text}
      onChange={onChange}
    />
  );
}
