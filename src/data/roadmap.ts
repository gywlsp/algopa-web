import {
  BLACK,
  PASTEL_BLUE,
  PASTEL_RED,
  PASTEL_YELLOW,
} from 'src/constants/colors';

export const FAILURE_RATE_COLORS = [PASTEL_BLUE, PASTEL_YELLOW, PASTEL_RED];

export const GRAPH_OPTIONS = {
  layout: {
    hierarchical: { enabled: true, direction: 'LR' },
  },
  edges: {
    color: BLACK,
  },
};
