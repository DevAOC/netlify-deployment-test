import { BrowserRouter } from "react-router-dom";

import {
  AppType,
  Provider as GadgetProvider,
  useGadget,
} from "@gadgetinc/react-shopify-app-bridge";
import { api } from "./api";

export default function App() {
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey={process.env["SHOPIFY_API_KEY"]}
      api={api}
    >
      <PolarisProvider>
        <BrowserRouter>
          <EmbeddedApp />
        </BrowserRouter>
      </PolarisProvider>
    </GadgetProvider>
  );
}

const EmbeddedApp = () => {
  const { isAuthenticated } = useGadget();

  return isAuthenticated ? <>Hello, World</> : <>Loading...</>;
};
