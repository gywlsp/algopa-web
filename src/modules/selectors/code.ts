import { selector } from 'recoil';
import { problemCodes, selectedProblemCodeId } from '../atoms/code';

export const selectedProblemCode = selector({
  key: 'selectedProblemCode',
  get: ({ get }) => {
    const codes = get(problemCodes);
    const selectedCodeId = get(selectedProblemCodeId);
    return codes?.find((code) => code.id === selectedCodeId);
  },
});
