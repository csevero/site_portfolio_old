export interface IPostProps {
  _id: string;
  title: string;
  subject: string;
  category_project: {
    nameCategory: string;
  };
  user: {
    name: string;
    email: string;
  };
}

export interface IPostParams {
  id: string;
}
