import React, { createContext, useState, useCallback } from "react";
import { Toast } from "react-bootstrap";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showToast = useCallback((message) => {
    console.log("triggered");
    setMessage(message);
    setTimeout(() => setMessage(null), 5000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      <div>
        <Toast className="position-absolute top-0 end-0 m-2 z-2 bg-info-subtle" show={!!message} onClose={() => setMessage(null)} delay={5000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
        {children}
      </div>
    </ToastContext.Provider>
  );
};
