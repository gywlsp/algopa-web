import React from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditSection() {
  return (
    <Editor
      className="code-editor"
      options={{ fontSize: '14px' }}
      theme="vs-dark"
      height="calc(100% - 26.4rem)"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}
