import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { getAllIteasRoute, getViewIdeaRoute, viewRouteParams } from "./lib/route";
import { Layout } from "./components/layout";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIteasRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute(viewRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
