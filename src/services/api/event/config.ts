import { IEvent } from 'src/interfaces/event/IEvent';
import { baseConfig } from '..';

export const createConfig = (events: IEvent[]) =>
  baseConfig(true).post(`/events`, events);
