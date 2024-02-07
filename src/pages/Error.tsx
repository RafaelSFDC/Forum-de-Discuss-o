import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <div className="flex flex-col gap-4">
        <p>Desculpe, algo de errado aconteceu</p>
        <p>
          <i className="text-sm text-red-500">
            {error.statusText || error.message}
          </i>
        </p>
      </div>
      <a href="/">Voltar para a página inicial</a>
    </div>
  );
}
