import axios from 'axios';

import { IEvent } from 'src/interfaces/event/IEvent';
import { createConfig } from './config';

export const create = async (
  codeId: string,
  events: IEvent[]
): Promise<{
  lastEventId: string;
  timestamp: Date;
}> =>
  axios(createConfig(codeId, events)).then((res) => {
    return res.data;
  });

const EventService = { create };

export default EventService;
