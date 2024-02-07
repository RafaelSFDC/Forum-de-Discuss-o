import { AiFillMessage } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSnapshot } from "valtio";
import { state } from "@/store";

const Header = () => {
  useSnapshot(state);
  return (
    <header className="bg-primary px-4 py-2 flex justify-between min-h-14">
      <div className="text-white text-lg font-bold flex items-center gap-2 flex-1">
        <AiFillMessage className="text-2xl" />
        Forum App
      </div>
      <nav className="flex items-center flex-1 justify-center">
        <ul className="flex gap-8 text-white  font-medium items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Usuários
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/posts/${state.userId} `}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Seus Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      {state.logged ? (
        <div className="flex-1 justify-end flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="border-0 outline-none">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Atividades
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => (state.logged = false)}
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex gap-4 font-medium  justify-end  items-center flex-1">
          <div
            className="text-white cursor-pointer"
            onClick={() => (state.modalLogin = true)}
          >
            Login
          </div>
          <div
            className="text-white cursor-pointer"
            onClick={() => (state.modalRegister = true)}
          >
            Criar Conta
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
