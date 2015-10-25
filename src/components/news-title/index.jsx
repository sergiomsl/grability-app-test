import React from 'react'

class NewsTitle extends React.Component {
  render () {
    return (
      <div className="news-title">
        <h3 className="news-title__text">{ this.props.title }</h3>
      </div>
    )
  }
}

export default NewsTitle
