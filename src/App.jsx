import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { Container, Stack } from "react-bootstrap";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Stack>
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Stack>
    </div>
  );
}
export default App;
