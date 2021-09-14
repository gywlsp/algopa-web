import { IEvent } from 'src/interfaces/event/IEvent';
import { baseConfig } from '..';

export const createConfig = (codeId: string, events: IEvent[]) =>
  baseConfig(true).post(`/codes/${codeId}/events`, events);
