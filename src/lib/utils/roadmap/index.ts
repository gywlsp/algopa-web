import { BLUE_GREEN, GREY, SUCCESS_BLUE } from 'src/constants/colors';
import { FAILURE_RATE_COLORS } from 'src/data/roadmap';
import {
  RoadmapDTO,
  RoadmapNodes,
  RoadmapCategoryNode,
  RoadmapProblemNode,
  RoadmapCategoryDTO,
  RoadmapProblemDTO,
} from 'src/types/roadmap';

export const getNodes = (
  roadmapData: RoadmapDTO
): {
  nodes: RoadmapNodes;
  categoryNodes: RoadmapCategoryNode[];
  problemNodes: RoadmapProblemNode[];
} => {
  const categoryNodes = roadmapData?.categories
    ?.sort((a, b) => a.order - b.order)
    .map((category) => {
      const { id, nodeId, order, name } = category;
      const label = `${order}. ${name}`;
      return {
        ...category,
        categoryId: id,
        id: nodeId,
        label,
        level: order,
        ...getCategoryNodeStyle(category),
      };
    });

  const problemNodes =
    categoryNodes &&
    roadmapData?.problems.map((problem) => {
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
        ...getProblemNodeStyle(problem),
      };
    });

  return {
    nodes: [...(categoryNodes || []), ...(problemNodes || [])],
    categoryNodes,
    problemNodes,
  };
};

const getCategoryNodeStyle = (category: RoadmapCategoryDTO) => {
  const background = category?.progressRate
    ? FAILURE_RATE_COLORS[Math.floor(3 * category.failureRate)]
    : BLUE_GREEN[200];
  return {
    color: {
      background,
      border: GREY[500],
      highlight: {
        background,
        border: GREY[500],
      },
    },
    borderWidth: 2,
    borderWidthSelected: 3,
    shape: 'circle',
    font: { size: 16 },
  };
};

const getProblemNodeStyle = (problem: RoadmapProblemDTO) => ({
  color: {
    background: BLUE_GREEN[100],
    border: problem?.isSolved ? SUCCESS_BLUE : GREY[500],
    highlight: {
      background: BLUE_GREEN[100],
      border: problem?.isSolved ? SUCCESS_BLUE : GREY[500],
    },
  },
  borderWidth: 2,
  borderWidthSelected: 3,
  shape: 'circle',
});
