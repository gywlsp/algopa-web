import {
  BLACK,
  BLUE_GREEN,
  FAILURE_RED,
  GREY,
  PASTEL_BLUE,
  PASTEL_RED,
  PASTEL_YELLOW,
  SUCCESS_BLUE,
} from 'src/constants/colors';

export const FAILURE_RATE_COLORS = [PASTEL_RED, PASTEL_YELLOW, PASTEL_BLUE];
export const SOLVED_COLORS = [SUCCESS_BLUE, FAILURE_RED, GREY[500]];


const ALGORITHM_CATEGORIES = [
  '구현',
  '재귀',
  '완전탐색',
  '분할정복',
  '정렬',
  '이분탐색',
  '다이나믹프로그래밍',
  '그리디',
  '문자열',
  '배열, 큐, 스택, 덱',
  '해시',
  '트리',
  '세그먼트트리',
  '힙',
  '우선순위큐',
  '깊이우선탐색',
  '너비우선탐색',
  '백트래킹',
  '최단경로',
  '비트마스킹',
  '투포인터',
  '위상정렬',
];

export const CATEGORY_NODES = ALGORITHM_CATEGORIES.map((category, i) => ({
  id: String(i),
  label: `[${i + 1}] ${category}`,
  color: BLUE_GREEN[300],
  shape: 'circle',
}));

export const CATEGORY_EDGES = ALGORITHM_CATEGORIES.slice(1).map((_, i) => ({
  from: String(i),
  to: String(i + 1),
}));

export const getCategoryNodeStyle = (isLoggedIn: boolean, index: number) => ({
  color: isLoggedIn
    ? {
        background: FAILURE_RATE_COLORS[index % 4] || BLUE_GREEN[200],
        border: index % 5 ? GREY[500] : SUCCESS_BLUE,
        highlight: {
          background: FAILURE_RATE_COLORS[index % 4] || BLUE_GREEN[200],
          border: index % 5 ? GREY[500] : SUCCESS_BLUE,
        },
      }
    : BLUE_GREEN[200],
      shape: 'circle',
  font: { size: 16 },
    });

export const getProblemNodeStyle = (isLoggedIn: boolean, index: number) => ({
  color: isLoggedIn
    ? {
        background: BLUE_GREEN[100],
        border: SOLVED_COLORS[index % 3],
        highlight: {
          background: BLUE_GREEN[100],
          border: SOLVED_COLORS[index % 3],
        },
  }
    : BLUE_GREEN[100],
  shape: 'circle',
});

export const GRAPH_OPTIONS = {
  layout: {
    hierarchical: { enabled: true, direction: 'LR' },
  },
  edges: {
    color: BLACK,
  },
};
