import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import NProgress from "nprogress";
import classnames from "classnames";

const Layout = ({ children, footer = true, dark, title }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      // console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouterChange);
    router.events.on("routeChangeConmplete", NProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);
  return (
    <div className={classnames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={classnames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Joe Vega Portafolio</h1>
            <p>2021-{new Date().getFullYear()}</p>
            <p>All rights Rerverd</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
