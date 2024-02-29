import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/queries";
import { GetStatesGlobally } from "./Hooks/getStatesGlobally";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/"
              element={
                <GetStatesGlobally>
                  <Home />
                </GetStatesGlobally>
              }
            />
          </Route>

          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
