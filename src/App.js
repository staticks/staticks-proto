import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page";

function App() {
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8080/routes");
      setRoutes(data);
    })();
  }, []);

  return (
    <Suspense fallback={<div>로딩중</div>}>
      {routes && (
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              const { path } = route;
              return (
                <Route
                  key={path}
                  path={path}
                  element={<Page route={route} />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      )}
    </Suspense>
  );
}

export default App;
