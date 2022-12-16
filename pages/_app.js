import Layout from "../component/Layout";
import { StateProvider } from "../globalStore/ContextProvider";
import reducer, { initialState } from "../globalStore/reducer";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
