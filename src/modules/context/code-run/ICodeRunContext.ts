import { CodeSubmitOutput } from 'src/types/code';

export interface ICodeRunContext {
  state: {
    input: string;
    isRunOutputLoading: {
      status: boolean;
      guideText: string;
    };
    isInputModalOpen: boolean;
    isCompleteModalOpen: boolean;
    runOutput: CodeSubmitOutput;
  };
  action: {
    openInputModal: () => void;
    closeInputModal: () => void;
    closeCompleteModal: () => void;
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCodeRun: () => Promise<void>;
    onCodeSubmit: () => Promise<void>;
  };
}
