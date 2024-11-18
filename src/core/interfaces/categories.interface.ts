export interface ICategories {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  parent: string;
  children: string[];
  hasChildren: boolean;
}
