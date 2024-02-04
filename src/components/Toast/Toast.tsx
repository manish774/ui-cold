import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import "./Toast.scss"; // Import or define your styles in a separate CSS file

type ToastProps = {
  message: string;
  type: "success" | "warning" | "failure";
  onClose: () => any;
  timeout?: number;
};

const Toast = () => {
  const [toastStack, setToastStack] = useState([
    { message: "test" },
    { message: "test2" },
  ]);

  useEffect(() => {
    if (toastStack?.length) {
      const intervalId = setInterval(() => {
        setToastStack((prevStack) => prevStack.slice(0, -1));
      }, 2000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [toastStack]);

  const prepareUi = toastStack.map((toast) => (
    <div className={`toast-container toast--success`} key={toast?.message}>
      {toast?.message}
    </div>
  ));

  return (
    <div style={{ position: "absolute", right: "1px", zIndex: "999" }}>
      {prepareUi}
    </div>
  );
};

export default Toast;
