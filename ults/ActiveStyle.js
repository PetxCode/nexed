import { withRouter } from "next/router";

const ActiveStyle = ({ children, href, router }) => {
  //   (function fetchPage() {
  //     if (typeof window !== "undefined") {
  //       router.prefetch(router.pathname);
  //     }
  //   })();

  const handleClick = (e) => {
    e.preventDefault();
    // router.push(href);
    // router.push(href);
    router.push(href);
  };

  const currentClick = router.pathname === href || router.asPath === href;

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        styled={{
          textDecoration: "none",
          fontWeight: currentClick ? "bold" : "normal",
          textTransform: currentClick ? "uppercase" : "lowercase",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default withRouter(ActiveStyle);
