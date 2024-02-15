import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { state } from "@/store";
export const useQueryPosts = () => {
  const url = "posts";
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => axios.get(`${state.mainUrl}/${url}`),
  });
};
