import { DataTable } from "@/components/tables/Table";
import { columns } from "@/components/tables/columns";
import { useQueryPosts } from "@/hooks/useQueryPosts";

const Home = () => {
  const { data, isLoading } = useQueryPosts();
  console.log(data);
  return (
    <main className="bg-[#9FAFA1] flex">
      {!isLoading && <DataTable columns={columns} data={data?.data.data} />}
    </main>
  );
};

export default Home;
