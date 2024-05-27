import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/app/store";

import { UserSearch } from "@/pages/UserSearch/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserSearch />
    </Provider>
  </React.StrictMode>
);
