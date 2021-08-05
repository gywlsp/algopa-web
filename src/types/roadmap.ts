import { Edge, Node } from 'vis-network';
import { ICategoryReadDTO } from 'src/interfaces/category/ICategory';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { VariadicTuple } from '.';

export type RoadmapCategoryDTO = ICategoryReadDTO & {
  nodeId: string;
};

export type RoadmapProblemDTO = IProblemReadDTO & {
  nodeId: string;
};

export type RoadmapEdgeType = 'next' | 'in';

export type RoadmapEdge = { type: RoadmapEdgeType } & Edge;

export type RoadmapEdgeDTO = Omit<RoadmapEdge, 'id'>;

export type RoadmapDTO = {
  categories: RoadmapCategoryDTO[];
  problems: RoadmapProblemDTO[];
  edges: RoadmapEdgeDTO[];
};

export type RoadmapCategoryNode = Omit<RoadmapCategoryDTO, 'id'> & {
  categoryId: number;
} & Node;
export type RoadmapProblemNode = Omit<RoadmapProblemDTO, 'id'> & {
  problemId: number;
} & Node;

export type RoadmapNodes = VariadicTuple<
  RoadmapCategoryNode[],
  RoadmapProblemNode[]
>;
