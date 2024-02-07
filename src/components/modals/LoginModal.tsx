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
  email: z.string().email("Por favor, insira um e-mail válido."),
  password: z
    .string()
    .min(6, "Por favor, insira uma senha de pelo menos 6 caracteres."),
});

const LoginModal = () => {
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
    state.modalLogin = false;
    form.reset();
  }

  return (
    <ModalMotion
      onClick={() => (state.modalLogin = false)}
      isOpen={state.modalLogin}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[400px]"
        >
          <h3 className="text-center text-2xl font-bold border-b border-b-primary pb-2">
            Login
          </h3>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center flex-col gap-2 font-medium">
            <div className="flex gap-2">
              <p>Esqueceu sua senha?</p>
              <span
                className="cursor-pointer decoration-primary underline"
                onClick={() => {
                  state.modalRecovery = true;
                  state.modalLogin = false;
                }}
              >
                Recuperar a senha
              </span>
            </div>
            <div className="flex gap-2">
              <p>Já tem uma conta?</p>
              <span
                className="cursor-pointer decoration-primary underline"
                onClick={() => {
                  state.modalLogin = false;
                  state.modalRegister = true;
                }}
              >
                Criar Conta
              </span>
            </div>
          </div>
          <Button type="submit" className="w-full text-lg">
            Fazer Login
          </Button>
        </form>
      </Form>
    </ModalMotion>
  );
};

export default LoginModal;
