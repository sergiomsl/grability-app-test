import React from 'react'

class NewsImage extends React.Component {
  render () {
    return (
      <figure className="news-image media-object">
        <img className="media-left" src={this.props.image}></img>
      </figure>
    )
  }
}

export default NewsImage
