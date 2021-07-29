import { Edge, Node } from 'vis-network';
import { ICategoryReadDTO } from 'src/interfaces/category/ICategory';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { VariadicTuple } from '.';

export type RoadmapDTO = {
  categories: RoadmapCategoryNode[];
  problems: RoadmapProblemNode[];
  edges: RoadmapEdge[];
};

export type RoadmapNode = {
  nodeId: string;
} & Node;

export type RoadmapCategoryNode = Omit<ICategoryReadDTO, 'id'> & RoadmapNode;
export type RoadmapProblemNode = Omit<IProblemReadDTO, 'id'> & RoadmapNode;

export type RoadmapEdge = Edge;

export type RoadmapNodes = VariadicTuple<
  RoadmapCategoryNode[],
  RoadmapProblemNode[]
>;
