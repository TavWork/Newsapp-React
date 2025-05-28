import React from 'react'

 const NewsItem =(props) => {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
          <div className="card" >
            <div style={{display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute'}}>
              <span className="badge rounded-pill bg-danger" >
                  {source? source : "Unknown Source"}
              </span>
            </div>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} published on {new Date(date).toUTCString()}</small></p>
              <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  
}

export default NewsItem
