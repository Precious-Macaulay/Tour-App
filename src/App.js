import Loading from "./component/Loading";
import { Suspense, lazy } from "react";

const url = "https://course-api.com/react-tours-project";

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
