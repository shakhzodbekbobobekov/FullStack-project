import { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  console.log(errorMessage);

  return (
    error !== null &&
    errorMessage().map((error) => {
      return (
        <div
          className="alert alert-danger m-1 mb-2 p-1 text-start"
          role="alert"
          key={error}
        >
          {error}
          {console.log(error)}
          <p>lorem</p>
        </div>
      );
    })
  );
}

export default ValidationError;
