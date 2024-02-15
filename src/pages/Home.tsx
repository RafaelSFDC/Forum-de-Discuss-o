import { useQueryPosts } from "@/hooks/useQueryPosts";

const Home = () => {
  const { data } = useQueryPosts();
  console.log(data);
  return (
    <main className="bg-[#9FAFA1]">
      <div>
        <div className="w-full bg-red-400 p-2">Filter</div>
        <ul className="flex flex-col gap-2">
          {data?.data.data.map((post) => (
            <li key={post.id} className="flex gap-4 justify-between">
              <img
                src="https://via.placeholder.com/150"
                alt="userImage"
                className="h-[42px] rounded-md"
              />
              <p>{post.title}</p>
              <p>{post.likes}</p>
              <p>{post.comments.length}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
