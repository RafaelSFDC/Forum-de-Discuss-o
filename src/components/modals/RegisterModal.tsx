import { useSnapshot } from "valtio";
import ModalMotion from "./ModalMotion";
import { state } from "@/store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Por favor, insira um nome de pelo menos 3 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  password: z
    .string()
    .min(6, "Por favor, insira uma senha de pelo menos 6 caracteres."),
  confirmPassword: z
    .string()
    .min(6, "Por favor, insira uma senha de pelo menos 6 caracteres."),
});

const RegisterModal = () => {
  useSnapshot(state);
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
    state.modalRegister = false;
  }

  return (
    <ModalMotion
      onClick={() => (state.modalRegister = false)}
      isOpen={state.modalRegister}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[400px]"
        >
          <h3 className="text-center text-2xl font-bold border-b border-b-primary pb-2">
            Criar Conta
          </h3>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="!mt-4">
                <FormLabel>Nome de Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="!mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="!mt-4">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="!mt-4">
                <FormLabel>Confirme sua Senha</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="flex gap-2 font-medium">
              <p>Já tem uma conta?</p>
              <span
                className="cursor-pointer decoration-primary underline"
                onClick={() => {
                  state.modalRegister = false;
                  state.modalLogin = true;
                }}
              >
                Fazer Login
              </span>
            </div>
          </div>
          <Button type="submit" className="w-full text-lg">
            Criar conta
          </Button>
        </form>
      </Form>
    </ModalMotion>
  );
};

export default RegisterModal;
