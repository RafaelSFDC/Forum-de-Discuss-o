import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RecoveryModal from "./components/modals/RecoveryModal";

function App() {
  return (
    <div className="flex flex-col gap-2 bg-[#9FAFA1] flex-1 h-full overflow-hidden">
      <Header />
      <LoginModal />
      <RegisterModal />
      <RecoveryModal />
      <div className="px-4 flex flex-col gap-4">
        <div className="bg-white p-2 rounded-md shadow flex flex-col">
          <div className="text-md font-medium">Page</div>
          <div className="text-lg font-medium">Post Info</div>
          <div className="text-md font-medium">Username , Date time, Tags</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
