import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <PageLayout>
      <Route path="" element={<Home />} />
      <Route path="/:id" element={<BlogPage />} />
    </PageLayout>
  );
}

export default App;
