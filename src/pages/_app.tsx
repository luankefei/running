import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "@containers/Layout";

import store from "../store";

// styles
import "@arco-design/web-react/dist/css/arco.css";
import globalStyles from "../styles/globals";

// import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
