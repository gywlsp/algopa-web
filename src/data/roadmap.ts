import { BLUE_GREEN } from 'src/constants/colors';

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

const CATEGORY_NODES = ALGORITHM_CATEGORIES.map((category, i) => ({
  id: String(i),
  label: `[${i + 1}] ${category}`,
  color: BLUE_GREEN[300],
  shape: 'circle',
}));

const CATEGORY_EDGES = ALGORITHM_CATEGORIES.slice(1).map((_, i) => ({
  from: String(i),
  to: String(i + 1),
}));

export const PROBLEM_NODES = CATEGORY_NODES.reduce((acc, { id: _id }) => {
  const problems = [];
  for (let i = 0; i < 3; i++) {
    const id = _id + '-' + i;
    const label = `문제 ${id}`;
    problems.push({
      id,
      label,
      color: BLUE_GREEN[100],
      shape: 'circle',
    });
  }
  return acc.concat(problems);
}, []);

const PROBLEM_EDGES = PROBLEM_NODES.map(({ id }) => {
  const categoryId = id.slice(0, id.indexOf('-'));
  return { from: id, to: categoryId };
});

export const GRAPH_DATA = {
  nodes: CATEGORY_NODES.concat(PROBLEM_NODES),
  edges: CATEGORY_EDGES.concat(PROBLEM_EDGES),
};
