import Loader from "./componentes/site_loader/Loader";
import "./App.scss";
import { Suspense } from "react";
import React from "react";

const SphereScene = React.lazy(() =>
  import("./componentes/sphere_section/SphereScene")
);
function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <SphereScene />
      </Suspense>
    </div>
  );
}

export default App;
