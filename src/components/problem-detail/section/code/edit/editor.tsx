import React from 'react';
import CodeEditor from '@monaco-editor/react';

import { useCodeEdit } from 'src/hooks/code';

export default function CodeEditSectionEditor() {
  const { code, text, onChange } = useCodeEdit();

  return (
    <CodeEditor
      className="code-editor"
      options={{ fontSize: '14px', readOnly: false }}
      theme="vs-dark"
      height="calc(100% - 21.6rem)"
      language={code?.language}
      value={text}
      onChange={onChange}
    />
  );
}
