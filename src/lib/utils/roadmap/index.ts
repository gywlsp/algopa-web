import { BLUE_GREEN, GREY } from 'src/constants/colors';
import { FAILURE_RATE_COLORS, SOLVED_COLORS } from 'src/data/roadmap';
import {
  RoadmapDTO,
  RoadmapNodes,
  RoadmapCategoryNode,
  RoadmapProblemNode,
} from 'src/types/roadmap';

export const getNodes = (
  roadmapData: RoadmapDTO,
  isLoggedIn: boolean
): {
  nodes: RoadmapNodes;
  categoryNodes: RoadmapCategoryNode[];
  problemNodes: RoadmapProblemNode[];
} => {
  const categoryNodes = roadmapData?.categories
    ?.sort((a, b) => a.order - b.order)
    .map((category, index) => {
      const { id, nodeId, order, name } = category;
      const label = `[${order}] ${name}`;
      return {
        ...category,
        categoryId: id,
        id: nodeId,
        label,
        level: order,
        ...getCategoryNodeStyle(isLoggedIn, index),
      };
    });

  const problemNodes =
    categoryNodes &&
    roadmapData?.problems.map((problem, index) => {
      const { id, nodeId, title, level: problemLevel, categories } = problem;
      const label = title.length > 8 ? title.slice(0, 6) + '..' : title;
      const lastCategory = categories[categories.length - 1];
      const nodeLevel =
        (categoryNodes?.find((category) => category.name === lastCategory)
          ?.level || 0) + 1;
      return {
        ...problem,
        problemId: id,
        id: nodeId,
        label,
        level: nodeLevel,
        problemLevel,
        ...getProblemNodeStyle(isLoggedIn, index),
      };
    });

  return {
    nodes: [...(categoryNodes || []), ...(problemNodes || [])],
    categoryNodes,
    problemNodes,
  };
};

const getCategoryNodeStyle = (isLoggedIn: boolean, index: number) => ({
  color: isLoggedIn
    ? {
        background: FAILURE_RATE_COLORS[index % 4] || BLUE_GREEN[200],
        border: GREY[500],
        highlight: {
          background: FAILURE_RATE_COLORS[index % 4] || BLUE_GREEN[200],
          border: GREY[500],
        },
      }
    : BLUE_GREEN[200],
  shape: 'circle',
  font: { size: 16 },
});

const getProblemNodeStyle = (isLoggedIn: boolean, index: number) => ({
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
