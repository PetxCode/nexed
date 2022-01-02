import MainRoute from "../screen/MainRoute";
import "../styles/globals.css";
import { AuthProvider } from "../ults/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainRoute>
        <Component {...pageProps} />
      </MainRoute>
    </AuthProvider>
  );
}

export default MyApp;
