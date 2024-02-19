import { useQueryCategories } from "@/hooks/useQueryCategories";
import { useQueryPost } from "@/hooks/useQueryPost";
import { useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import PostItem from "../components/PostItem";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Categories, Comments } from "@/interfaces";

const formSchema = z.object({
  content: z.string().min(3, "Por favor, insira pelo menos 3 caracteres."),
});

const Posts = () => {
  const snap = useSnapshot(state);
  const { id } = useParams();
  const { data } = useQueryPost({ id: id || "" });
  const { data: categories } = useQueryCategories();
  const post = data?.data.data;

  const category = categories?.data.data.find(
    (category: Categories) => category.id == post?.user.category
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    state.logged = true;
    state.modalLogin = false;
    form.reset();
  }

  return (
    <main className="flex flex-1 flex-col gap-4 ">
      <div className="flex gap-4 bg-white w-full px-4 py-2 rounded-md shadow-sm  flex-1 max-h-[250px] items-center">
        <div className="flex gap-4 w-full">
          <ul className="flex-1 w-full max-w-[180px] flex-col flex items-center gap-2 h-full">
            <img
              src={post?.user?.image}
              alt="user image"
              className="rounded-md h-25 w-25"
            />
            <h4 className="text-primary font-bold">{post?.user?.username}</h4>
            <p className="capitalize">
              {post?.user?.role === "User" ? "Usuário" : "Admin"}
            </p>
            <p className="capitalize">{category ? category.content : ""}</p>
          </ul>
          <div className="flex-1 flex flex-col gap-2 h-full">
            <div className="w-full flex justify-between">
              <span className="text-blue-500 text-sm">
                {post?.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("pt-BR")
                  : ""}
              </span>
              <span className="text-blue-500 flex gap-1 items-center cursor-pointer text-sm">
                <BiSolidLike />
                {post?.likes}
              </span>
            </div>
            <h1 className="text-primary text-2xl font-bold text-center">
              {post?.title}
            </h1>
            <p>{post?.content}</p>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {post?.comments.map((comment: Comments) => (
          <PostItem comments={comment} category={category} />
        ))}
      </ul>

      <div className="flex gap-4 bg-white w-full px-4 rounded-md shadow-sm   items-center justify-center py-4">
        {snap.logged ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem..."
                        className="resize-none"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        ) : (
          <Button onClick={() => (state.modalLogin = true)}>
            Faça login para comentar
          </Button>
        )}
      </div>
    </main>
  );
};

export default Posts;
