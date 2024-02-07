import { proxy } from "valtio";

export const state = proxy({
  userId: 1,
  logged: false,
  modalLogin: false,
  modalRegister: false,
  modalRecovery: false,
});
