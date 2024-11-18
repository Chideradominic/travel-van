import { useRouteError } from "react-router-dom";
export default function ErrorComponent() {
  const error = useRouteError();
  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
        <pre>
          {error.status}-{error.statusText}
        </pre>
      </>
    );
  }
}
