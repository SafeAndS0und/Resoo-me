import React from "react";
import type { AppProps } from "next/app";
import "common/global.scss";

/**
 * App is a component which wraps all the other components, including every page.
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

if (process.browser && process.env.NODE_ENV !== "production") {
  const container = document.getElementById("__next");
  import("react-context-devtool").then(({ debugContextDevtool }) =>
    debugContextDevtool(container)
  );
}

export default App;
