import React from "react";
import Loading from "./component/Loading";
import { Suspense, lazy } from "react";

const Tours = lazy(() => import("./component/Tours"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Tours />
      </Suspense>
    </div>
  );
}

export default App;
