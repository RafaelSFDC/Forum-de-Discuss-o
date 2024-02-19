import { Categories, Comments } from "@/interfaces";

interface commentsItemProps {
  comments: Comments;
  category: Categories;
  title?: string;
}

const PostItem = ({ comments, category, title }: commentsItemProps) => {
  console.log(comments);
  return (
    <li className="flex gap-4 bg-white w-full px-4 py-2 rounded-md shadow-sm  flex-1 max-h-[250px] items-center">
      <ul className="flex-1 w-full max-w-[180px] flex-col flex items-center gap-2 h-full">
        <img
          src={comments?.user?.image}
          alt="user image"
          className="rounded-md h-25 w-25"
        />
        <h4 className="text-primary font-bold">{comments?.user?.username}</h4>
        {comments?.user?.role == "user" ? "Usuário" : "Admin"}
        <p className="capitalize">{category ? category.content : ""}</p>
      </ul>
      <div className="flex-1 flex flex-col gap-4 h-full">
        {title && (
          <h1 className="text-primary text-2xl font-bold text-center">
            {title}
          </h1>
        )}
        <div className="w-full flex justify-between">
          <span className="text-blue-500 text-sm">
            {comments?.createdAt
              ? new Date(comments.createdAt).toLocaleDateString("pt-BR")
              : ""}
          </span>
        </div>

        <p>{comments?.content}</p>
      </div>
    </li>
  );
};

export default PostItem;
