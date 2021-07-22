import { ICategoryReadDTO } from 'src/interfaces/category/ICategory';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';

export type RoadmapDTO = {
  categories: RoadmapCategoryNode[];
  problems: RoadmapProblemNode[];
  edges: RoadmapEdge[];
};

export type RoadmapNode = {
  nodeId: string;
  id: string;
  label: string;
  color: string;
  shape: string;
};

export type RoadmapCategoryNode = ICategoryReadDTO & RoadmapNode;
export type RoadmapProblemNode = IProblemReadDTO & RoadmapNode;

export type RoadmapEdge = {
  from: string;
  to: string;
};
