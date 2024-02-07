import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { state } from "@/store";

const RegisterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Registrar</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Conta</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
            <Button
              variant="destructive"
              onClick={() => {
                state.logged = true;
              }}
            >
              Delete
            </Button>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
