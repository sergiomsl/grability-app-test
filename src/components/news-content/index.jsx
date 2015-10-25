import React from 'react'

class NewsContent extends React.Component {
  render () {
    return (
      <div className="news-content">
        <p className="news-content__text">{ this.props.content }</p>
      </div>
    )
  }
}

export default NewsContent
