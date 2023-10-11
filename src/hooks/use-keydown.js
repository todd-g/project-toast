import React from "react";

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKey(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [key, callback]);
}

export default useKeydown;
