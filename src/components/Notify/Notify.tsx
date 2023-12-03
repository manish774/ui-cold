import React, { useEffect } from "react";
import "./Notify.scss"; // Import or define your styles in a separate CSS file

const Notify = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeNotification();
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const closeNotification = () => {
    const notification = document.querySelector(".notification-container");
    if (notification) {
      //@ts-ignore
      notification?.style?.animation = "slideOut 0.5s ease-out forwards";
    }
  };

  return (
    <div className="notification-container">
      <h2>Notification</h2>
      <p>This is a neumorphic-style notification.</p>
    </div>
  );
};

export default Notify;
