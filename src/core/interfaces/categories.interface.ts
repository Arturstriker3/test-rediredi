export interface ICategories {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  hasChildren: boolean;
}
export interface ISubCategories {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  parent: string;
  children: string[];
  hasChildren: boolean;
}
