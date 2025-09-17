"use client";

import deleteUser from "@/app/actions/deleteUser";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";

const ConfirmUserDeletion = ({
  userId,
  setIsShowingConfirmationPopup,
}: {
  userId: string;
  setIsShowingConfirmationPopup: (value: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteUser = async () => {
    setIsLoading(true);

    const response = await deleteUser(userId);

    if (response) {
      setIsLoading(false);
      if (response.success) {
        // Optionally show a success message or toast
        console.log("User deleted successfully");
      } else {
        // Optionally show an error message or toast
        console.error("Error deleting user:", response.message);
      }
    }
  };

  return (
    <>
      <div className="fixed bg-black/10 backdrop-blur-xs inset-0" />
      <div className="fixed top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white border border-neutral-gray rounded-lg">
        <p className="font-semibold mb-2 text-lg leading-tight">
          Are you sure you want to delete this user?
        </p>
        <p className="mb-4">This action cannot be reversed.</p>
        <div className="flex justify-center gap-2">
          <button
            disabled={isLoading}
            onClick={handleDeleteUser}
            className="btn-primary !bg-status-error px-2 py-1"
          >
            {isLoading ? <LoaderCircle className="animate-spin" /> : "Delete"}
          </button>
          <button
            onClick={() => setIsShowingConfirmationPopup(false)}
            className="btn-secondary px-2 py-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

const DeleteUserButton = ({ userId }: { userId: string }) => {
  const [isShowingConfirmationPopup, setIsShowingConfirmationPopup] =
    useState(false);

  return (
    <>
      {isShowingConfirmationPopup && (
        <ConfirmUserDeletion
          userId={userId}
          setIsShowingConfirmationPopup={setIsShowingConfirmationPopup}
        />
      )}
      <button
        onClick={() => setIsShowingConfirmationPopup(true)}
        className="text-status-error grid place-content-center"
      >
        <Trash2 />
      </button>
    </>
  );
};

export default DeleteUserButton;
