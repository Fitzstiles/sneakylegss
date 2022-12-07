import Layout from "../component/Layout";
import { StateProvider } from "../globalStore/ContextProvider";
import reducer, { initialState } from "../globalStore/reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
