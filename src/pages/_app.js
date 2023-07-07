import "@/styles/globals.scss";

import { appWithTranslation } from "next-i18next";
import ArtworkProvider from "../providers/ArtworkProvider";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = ({ Component, pageProps }) => {
  return (
    <ArtworkProvider>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </ArtworkProvider>
  );
};

export default appWithTranslation(App);
