import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { state } from "@/store";
export const useQueryPost = ({ id }: { id: number | string }) => {
  const url = "posts";
  return useQuery({
    queryKey: ["post"],
    queryFn: async () => axios.get(`${state.mainUrl}/${url}/${id}`),
  });
};
