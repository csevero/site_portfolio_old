import api from "./api";
import { IPostProps } from "../interfaces/post.interface";

export const getAllPosts = async (): Promise<IPostProps[]> => {
  const { data }: { data: IPostProps[] } = await api.get("project-list-all");

  return data;
};