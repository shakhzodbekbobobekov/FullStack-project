import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleService from "../service/articles";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);
  // getArticlesDetail
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    getArticleDetail();
  }, [slug]);
  console.log(slug);
  return <div>id: {slug}</div>;
}

export default ArticleDetail;
