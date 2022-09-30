import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import ListPerson from "./views/ListPerson";
import "./index.css";
function App() {
  const routes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: ":slug",
      component: <ListPerson />,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={<Header />} />
          ))}
        </Routes>
      </Router>
      <Router>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
