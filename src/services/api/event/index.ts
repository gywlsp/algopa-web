import axios from 'axios';

import { IEvent } from 'src/interfaces/event/IEvent';
import { createConfig } from './config';

export const create = async (
  events: IEvent[]
): Promise<{
  lastEventId: string;
  timestamp: Date;
}> =>
  axios(createConfig(events)).then((res) => {
    return res.data;
  });

const EventService = { create };

export default EventService;
