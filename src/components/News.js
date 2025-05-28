import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(1);

  // document.title = `NewsMonkey | ${props.category}`;

  const updateNews = async () =>{
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
  &page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let out = await data.json();
    console.log(out);
    setArticles(out.articles)
    setTotalArticles(out.totalResults)
    setLoading(false);
    console.log( "value:",Math.ceil(totalArticles / props.pageSize));
    props.setProgress(100);
  }

  useEffect(()=> {
    updateNews();
  }, [])

  const handlePrevPage = async () => {
    console.log("Previous button clicked");
    setPage(page -1);
    updateNews();
  };

  const handleNextPage = async () => {
    console.log("Next button clicked");
    setPage(page+1);
    updateNews();
  };

  const fetchMoreData = async()=>{
    console.log("Fetching more data");
    
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
  &page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
    let data = await fetch(url);
    let out = await data.json();
    console.log(out);
    setArticles(articles.concat(out.articles))
    setTotalArticles(out.totalResults)
    setLoading(false)
    console.log( "value:",Math.ceil( totalArticles / props.pageSize));
  }

    // console.log("renderr");
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {/* { .loading && <Spinner/>} */}
        {/* { .articles.map((element)=>{console.log(element)})} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page <= Math.ceil(totalArticles / props.pageSize)}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88): "" }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="conatiner d-flex justify-content-between">
          <button disabled={ .page <= 1} type="button"  onClick={this.handlePrevPage}> &larr; Previous  </button>
          <button disabled={ .page + 1 > Math.ceil( .totalArticles / props.pageSize) }
          type="button" className="btn btn-dark" onClick={this.handleNextPage} >Next &rarr;</button>
        </div> */}
      </div>
    );
  
}

News.defaultProps = {
 
  pageSize: 20,
  country: "us",
  category: "general",
  apiKey: "8db134a542f04ac1a502ffa87c23e49e"
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
