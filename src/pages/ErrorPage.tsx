import { useRouteError, isRouteErrorResponse } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();

  // For when we throw a new response
  if (isRouteErrorResponse(error)) {
    return (
      <div className="container">
        <div>
          {typeof error.data === "string" ? error.data : "Request failed"}
        </div>
        <div>The server responded with a status of {error.status}</div>
        <div>{error.statusText}</div>
      </div>
    );
  }

  // For when we throw a normal error
  if (error instanceof Error) {
    return (
      <div className="container">
        <div>{error.message}</div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="container">
      <div>Generic Error Page</div>
    </div>
  );
};
