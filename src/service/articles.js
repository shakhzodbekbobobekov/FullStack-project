import axios from "./api";

const ArticlesService = {
  async getArticles() {
    const { data } = await axios.get("/articles");
    return data;
  },
  async getArticlesDetail(slug) {
    const { data } = await axios.get(`/articles/${slug}`);
    return data;
  },
};

export default ArticlesService;
