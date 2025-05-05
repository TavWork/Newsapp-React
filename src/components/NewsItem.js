import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
          <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex:'1'}}>
                  {source? source : "Unknown Source"}
                </span></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} published on {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
