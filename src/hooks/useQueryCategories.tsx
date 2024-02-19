import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { state } from "@/store";
export const useQueryCategories = () => {
  const url = "categories";
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => axios.get(`${state.mainUrl}/${url}`),
  });
};
