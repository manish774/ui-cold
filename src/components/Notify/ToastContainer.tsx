// import React, { useState, useEffect } from "react";
// import Toast from "./Toast";

// interface ToastMessage {
//   id: number;
//   message: string;
// }

// interface ToastContainerProps {
//   initialToasts: ToastMessage[];
// }

// const ToastContainer: React.FC<ToastContainerProps> = ({ initialToasts }) => {
//   const [toasts, setToasts] = useState<ToastMessage[]>(initialToasts);

//   const showToast = (id: number, message: string) => {
//     const newToast: ToastMessage = {
//       id,
//       message,
//     };

//     setToasts((prevToasts) => [...prevToasts, newToast]);
//   };

//   const removeToast = (id: number) => {
//     setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//   };

//   useEffect(() => {
//     const toastTimeouts: NodeJS.Timeout[] = [];

//     toasts.forEach((toast) => {
//       const timeout = setTimeout(() => {
//         removeToast(toast.id);
//       }, 5000);

//       toastTimeouts.push(timeout);
//     });

//     return () => {
//       // Clear timeouts when component unmounts or when toasts change
//       toastTimeouts.forEach((timeout) => clearTimeout(timeout));
//     };
//   }, [initialToasts]);

//   return (
//     <div className="toast-container">
//       {toasts.map((toast) => (
//         <Toast
//           key={toast.id}
//           message={toast.message}
//           onClose={() => removeToast(toast.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ToastContainer;
