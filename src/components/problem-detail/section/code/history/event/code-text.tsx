import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import CodeEditor from '@monaco-editor/react';

import { selectedProblemCode } from 'src/modules/selectors/code';
import { useCodeEventHighlight } from 'src/hooks/code';

const CODE_VIEW_OPTIONS = {
  fontSize: '14px',
  readOnly: true,
  minimap: { enabled: false },
};

export default function CodeHistoryCodeTextSection() {
  const code = useRecoilValue(selectedProblemCode);
  const { text, onEditorDidMount } = useCodeEventHighlight();

  return (
    <Wrapper>
      <CodeEditor
        className="code-editor"
        options={CODE_VIEW_OPTIONS}
        theme="vs-dark"
        language={code?.language}
        value={text || ''}
        onMount={onEditorDidMount}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;
