import { selector } from 'recoil';
import {
  codeEvents,
  problemCodes,
  selectedCodeEventId,
  selectedProblemCodeId,
} from '../atoms/code';

export const selectedProblemCode = selector({
  key: 'selectedProblemCode',
  get: ({ get }) => {
    const codes = get(problemCodes);
    const selectedCodeId = get(selectedProblemCodeId);
    return codes?.find((code) => code.id === selectedCodeId);
  },
});

export const selectedCodeEvent = selector({
  key: 'selectedCodeEvent',
  get: ({ get }) => {
    const events = get(codeEvents);
    const selectedEventId = get(selectedCodeEventId);
    return events?.find((event) => event.id === selectedEventId);
  },
});
