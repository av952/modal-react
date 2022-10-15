import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { ModalLoading } from "./ModalLoading";

export default function openModal(params,title) {
  const Modal = lazy(() => import(`./${params}`));

  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
      <Suspense fallback={<ModalLoading/>}>

      <Modal root={root} title={title}>

    </Modal>
      </Suspense>
  );
}
