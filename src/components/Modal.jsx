import { useRef, useEffect, useState, Fragment } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModalContext } from "../context/modal-context";
import "./modal.css";

const Modal = ({ className, children }) => {
  const ref = useRef();
  const [mount, setMount] = useState(false);
  const { showModal, closeModalHandler } = useModalContext();

  useEffect(() => {
    ref.current = document.querySelector("#overlays");
    setMount(true);
  }, []);

  return (
    <Fragment>
      {showModal && mount
        ? ReactDOM.createPortal(
            <>
              <section id="backdrop" onClick={closeModalHandler}></section>
              <Card className={className}>{children}</Card>
            </>,
            document.querySelector("#overlays")
          )
        : null}
    </Fragment>
  );
};

export default Modal;
