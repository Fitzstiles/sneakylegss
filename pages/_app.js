import { useEffect } from "react";
import Layout from "../component/Layout";
import { StateProvider } from "../globalStore/ContextProvider";
import reducer, { initialState } from "../globalStore/reducer";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
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
