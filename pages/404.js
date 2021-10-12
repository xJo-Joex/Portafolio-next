import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const custom404 = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>
          Esta página no existe. Por favor retorna al{" "}
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default custom404;
