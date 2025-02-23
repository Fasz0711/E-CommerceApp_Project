import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { Ecommerce } from "./components/Ecommerce";
import { EcommerceContext } from "./components/EcommerseContext";
import { Carrito } from "./components/Carrito";
import { Toaster } from "sonner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster richColors position="bottom-right" />{" "}
      {/*El toaster se pone aqui en React 19 */}
      <EcommerceContext>
        <Router>
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </EcommerceContext>
    </>
  );
}

export default App;
