export interface DataSource{
  name?: string;
  createDate?:Date;
  modifineDate?:Date;
  size?: number;
  isFolder?: boolean;
  path?: string;
  parent?: string;
  // onClick:()=>void;
  // onDelete:()=>void;
  children?:DataSource[];
}
