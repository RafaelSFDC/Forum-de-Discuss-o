import { Link, useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";

type ErrorType = {
  statusText: string;
  message: string;
  // Add other properties of the error object here
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col gap-8 bg-[#9FAFA1] h-screen items-center justify-center"
    >
      <h1 className="font-bold text-4xl">Oops!</h1>
      <div className="flex flex-col gap-4">
        <p>Desculpe, algo de errado aconteceu</p>
        <p className="text-center">
          <i className="text-sm text-center text-red-500">
            {(error as ErrorType).statusText || (error as ErrorType).message}
          </i>
        </p>
      </div>
      <Link to="/">
        <Button className="p-4">Voltar para a página inicial</Button>
      </Link>
    </div>
  );
}
