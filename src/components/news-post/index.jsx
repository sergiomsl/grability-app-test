import React from 'react'
import NewsImage from '../news-image'
import NewsTitle from '../news-title'
import NewsContent from '../news-content'

class NewsPost extends React.Component {
  render () {
    return (
      <article className="news-post">
        <div className="news-post__img">
          <img src={ this.props.image } />
        </div>

        <div className="news-post__text">
          <div className="news-post__text__title">
            <h3>{ this.props.title }</h3>
          </div>

          <div className="news-post__text__content">
            <p>{this.props.content}</p>
          </div>
        </div>

      </article>
    )
  }
}

export default NewsPost
