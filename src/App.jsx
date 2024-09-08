import { Route, Routes } from "react-router-dom";
import HomePage from "./components/templates/Home/HomePage";
import NotFoundPage from "./components/templates/404/NotFoundPage";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
