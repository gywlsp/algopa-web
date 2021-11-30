import {
  useState,
  useCallback,
  useContext,
  createContext,
  useEffect,
} from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { ICodeRunContext } from './ICodeRunContext';
import CodeService from 'src/services/api/code';
import {
  selectedProblemCodeId,
  selectedProblemCodeText,
} from 'src/modules/atoms/code';
import { CodeSubmitOutput } from 'src/types/code';

const CodeRunContext = createContext<ICodeRunContext>(undefined);

export const useCodeRunContext = () => useContext(CodeRunContext);

export const withCodeRunContext =
  (WrappedComponent: React.FunctionComponent<any>) => () => {
    const router = useRouter();
    const codeId = useRecoilValue(selectedProblemCodeId);
    const text = useRecoilValue(selectedProblemCodeText);
    const [input, setInput] = useState('');
    const [isInputModalOpen, setInputModalOpen] = useState(false);
    const [isCompleteModalOpen, setCompleteModalOpen] = useState(false);
    const [isRunOutputLoading, setCodeRunLoading] = useState({
      status: false,
      guideText: '',
    });
    const [runOutput, setRunOutput] = useState<CodeSubmitOutput>({
      success: undefined,
      result: '',
    });

    useEffect(() => {
      setRunOutput({
        success: undefined,
        result: '',
      });
    }, [codeId]);

    useEffect(() => {
      if (runOutput?.success && runOutput?.isSolved) {
        setCompleteModalOpen(true);
      }
    }, [runOutput]);

    useEffect(() => {
      setCompleteModalOpen(false);
    }, [router?.query?.id]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
      },
      []
    );

    const openInputModal = useCallback(() => {
      setInputModalOpen(true);
    }, []);

    const closeInputModal = useCallback(() => {
      setInputModalOpen(false);
    }, []);

    const closeCompleteModal = useCallback(() => {
      setCompleteModalOpen(false);
    }, []);

    const handleCodeRun = async () => {
      try {
        setCodeRunLoading({ status: true, guideText: '코드 실행 중 ...' });
        const data = await CodeService.execute(codeId, { text, input });
        setRunOutput(data);
        setInput('');
        closeInputModal();
      } catch (err) {
        setRunOutput({ success: false, result: '코드 실행 실패' });
      }
      setCodeRunLoading({ status: false, guideText: '' });
    };

    const submitCode = async () => {
      try {
        setCodeRunLoading({ status: true, guideText: '코드 채점 중 ...' });
        const data = await CodeService.submit(codeId, { text });
        setRunOutput(data);
      } catch (err) {
        setRunOutput({ success: false, result: '코드 채점 실패' });
      }
      setCodeRunLoading({ status: false, guideText: '' });
    };

    const codeRunStore = {
      state: {
        input,
        isRunOutputLoading,
        isInputModalOpen,
        isCompleteModalOpen,
        runOutput,
      },
      action: {
        openInputModal,
        closeInputModal,
        closeCompleteModal,
        onInputChange: handleInputChange,
        onCodeRun: handleCodeRun,
        submitCode,
      },
    };

    return (
      <CodeRunContext.Provider value={codeRunStore}>
        <WrappedComponent />
      </CodeRunContext.Provider>
    );
  };
