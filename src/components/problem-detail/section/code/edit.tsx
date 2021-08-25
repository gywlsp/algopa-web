import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

import { defaultCodes } from 'src/data/code';

export default function CodeEditSection() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(defaultCodes[language]);

  return (
    <Editor
      className="code-editor"
      options={{ fontSize: '14px' }}
      theme="vs-dark"
      height="calc(100% - 26.4rem)"
      defaultLanguage={language}
      defaultValue={code}
    />
  );
}
