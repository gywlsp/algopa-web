import React from 'react';
import CodeEditor from '@monaco-editor/react';

import { useSelectedCodeEdit } from 'src/hooks/api/code';

export default function CodeEditSection() {
  const { code, text, onChange } = useSelectedCodeEdit();

  return (
    <CodeEditor
      className="code-editor"
      options={{ fontSize: '14px', readOnly: false }}
      theme="vs-dark"
      height="calc(100% - 19.6rem)"
      language={code?.language}
      value={text}
      onChange={onChange}
    />
  );
}
