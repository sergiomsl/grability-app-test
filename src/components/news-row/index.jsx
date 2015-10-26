import React from 'react'
import NewsImage from '../news-image'
import NewsTitle from '../news-title'
import NewsPost from '../news-post'

class NewsRow extends React.Component {
  render () {
    return (
      <div className="post-block">
      <li className="news-row media">
          <NewsImage image={ this.props.image } />
          <NewsTitle title={ this.props.title }/>
      </li>

        <div className="news-row__post">
          <NewsPost image={ this.props.image }
                    title={ this.props.title }
                    content={ this.props.content }/>
        </div>
      </div>
    )
  }
}

export default NewsRow
