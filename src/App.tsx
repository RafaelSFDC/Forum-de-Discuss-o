import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RecoveryModal from "./components/modals/RecoveryModal";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <LoginModal />
      <RegisterModal />
      <RecoveryModal />
      <Outlet />
    </div>
  );
}

export default App;
