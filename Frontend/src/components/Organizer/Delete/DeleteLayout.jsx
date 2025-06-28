import React, { useState } from "react";
import Deleteshow from "./Deleteshow";
import DeleteSuccess from "./DeleteSuccess";

export default function DeleteLayout() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleOpenDelete = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    setShowSuccessModal(true);

    // Add your delete API logic here
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Event Management</h1>
      <button
        onClick={handleOpenDelete}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Delete Event
      </button>

      {showDeleteModal && (
        <Deleteshow onDelete={handleDelete} onCancel={handleCancelDelete} />
      )}

      {showSuccessModal && <DeleteSuccess onClose={handleCloseSuccess} />}
    </div>
  );
}
