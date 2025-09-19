import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import * as routes from "./lib/route";
import { Layout } from "./components/layout";
import { NewIdeaPage } from "./pages/NewIdeaPage";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllIteasRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getViewIdeaRoute(routes.viewRouteParams)} element={<ViewIdeaPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
