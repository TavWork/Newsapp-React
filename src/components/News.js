import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 20,
    category: "general",
    apiKey: "8db134a542f04ac1a502ffa87c23e49e",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("This is a constructor from News class");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 1
    };
    document.title = `NewsMonkey | ${this.props.category}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}
  &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let out = await data.json();
    console.log(out);
    this.setState({
      articles: out.articles,
      totalArticles: out.totalResults,
      loading: false,
    });
    console.log( "value:",Math.ceil(this.state.totalArticles / this.props.pageSize));
    this.props.setProgress(100);
  }

  async componentDidMount() {
    console.log("Component Mounting");
    this.updateNews();
    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let out = await data.json();
    // console.log(out);
    // this.setState({
    //   articles: out.articles,
    //   loading: false
    // })
  }

  handlePrevPage = async () => {
    console.log("Previous button clicked");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();

    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let out = await data.json();
    // console.log(out);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: out.articles,
    //   loading: false
    // })
  };

  handleNextPage = async () => {
    console.log("Next button clicked");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();

    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let out = await data.json();
    // console.log(out);
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: out.articles,
    //   loading: false
    // })
  };

  fetchMoreData = async()=>{
    console.log("Fetching more data");
    this.setState({ page: this.state.page + 1 , loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}
  &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let out = await data.json();
    console.log(out);
    this.setState({
      articles: this.state.articles.concat(out.articles),
      totalArticles: out.totalResults,
      loading: false,
    });
    console.log( "value:",Math.ceil(this.state.totalArticles / this.props.pageSize));
  }

  render() {
    console.log("renderr");
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.page <= Math.ceil(this.state.totalArticles / this.props.pageSize)}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
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
          <button disabled={this.state.page <= 1} type="button"  onClick={this.handlePrevPage}> &larr; Previous  </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize) }
          type="button" className="btn btn-dark" onClick={this.handleNextPage} >Next &rarr;</button>
        </div> */}
      </div>
    );
  }
}

export default News;
