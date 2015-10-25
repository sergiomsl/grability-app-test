import React from 'react'
import NewsImage from '../news-image'
import NewsTitle from '../news-title'

class NewsRow extends React.Component {
  render () {
    return (
      <li className="news-row media">
        <NewsImage image={ this.props.image } />
        <NewsTitle title={ this.props.title }/>
      </li>
    )
  }
}

export default NewsRow
