import { Trash2 } from "lucide-react";

const DeleteUserButton = ({ userId }: { userId: string }) => {
  return (
    <button className="text-status-error grid place-content-center">
      <Trash2 />
    </button>
  );
};

export default DeleteUserButton;
