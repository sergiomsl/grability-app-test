import React from 'react'
import NewsRow from '../news-row'
import NewsPost from '../news-post'

class NewsList extends React.Component {
  render () {
    return (
      <ul className="news-list media-list">
        {
          this.props.list.map((post) => {
            return <NewsRow key     = { post.id }
                            title   = { post.title }
                            content = { post.content }
                            image   = { post.image } />
          })
        }
      </ul>
    )
  }
}

export default NewsList
