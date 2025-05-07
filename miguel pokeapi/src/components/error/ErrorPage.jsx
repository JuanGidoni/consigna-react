import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
  
    return (
      <div>
        <div>
          <h1>{error.status || "Error"}</h1>
          <h2>
            {error.statusText || "Ocurrió un problema"}
          </h2>
  
          <div>
            <p>
              <strong>Detalles:</strong>
            </p>
            <pre>
              {error.data || "No hay información adicional."}
            </pre>
          </div>
  
          <Link href="/" >
            Go back
          </Link>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;