import api from "./api";
import { ICategoryProps } from "../interfaces/category.interface";

export const getAllCategories = async (): Promise<ICategoryProps[]> => {
  const { data }: { data: ICategoryProps[] } = await api.get(
    "/category-list-all"
  );

  return data;
};
