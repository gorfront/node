import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { getAllIteasRoute, getViewIdeRoute } from "./lib/route";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIteasRoute()} element={<AllIdeasPage />} />
          <Route path={getViewIdeRoute({ ideasNick: ":ideasNick" })} element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
