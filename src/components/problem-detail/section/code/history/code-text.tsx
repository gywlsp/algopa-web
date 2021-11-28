import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import CodeEditor, { OnMount } from '@monaco-editor/react';

import { selectedProblemCode } from 'src/modules/selectors/code';
import { useCodeEventHighlight } from 'src/hooks/code';

export default function CodeHistoryCodeTextSection() {
  const code = useRecoilValue(selectedProblemCode);
  const { editorRef, text, highlight } = useCodeEventHighlight();

  const handleEditorDidMount: OnMount = (editor, _) => {
    editorRef.current = editor;
    highlight();
  };

  return (
    <Wrapper>
      <CodeEditor
        className="code-editor"
        options={{
          fontSize: '14px',
          readOnly: true,
          minimap: { enabled: false },
        }}
        theme="vs-dark"
        language={code?.language}
        value={text || ''}
        onMount={handleEditorDidMount}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;
