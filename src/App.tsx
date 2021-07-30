import { useEffect } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  loadCategory,
  loadCourse,
  loadMinutes,
} from "./redux/Actions/courseActions";
import { useDispatch } from "react-redux";
import "./styles/App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourse());
    dispatch(loadMinutes());
    dispatch(loadCategory());
  }, [dispatch]);
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
