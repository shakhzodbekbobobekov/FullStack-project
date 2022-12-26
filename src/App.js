import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Login,
  Register,
  Navbar,
  ArticleDetail,
  CreateArticle,
  EditArticle,
} from "./components";
import PageNotFound from "./components/PageNotFound";
import { getItem } from "./helpers/storage";
import AuthService from "./service/AuthService";
import { signUserSuccess } from "./slice/Auth";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/createArticle" element={<CreateArticle />} />
          <Route path="/editArticle/:slug" element={<EditArticle />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
