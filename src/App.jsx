import {
  Home,
  HtmlGuide,
  JsGuide,
  ReactGuide,
  NodeGuide,
  FullStack,
  Practice,
} from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HtmlCssGuide" element={<HtmlGuide />} />
        <Route path="/JsGuide" element={<JsGuide />} />
        <Route path="/ReactGuide" element={<ReactGuide />} />
        <Route path="/NodeGuide" element={<NodeGuide />} />
        <Route path="/FullStack" element={<FullStack />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
