// En componentWillMount agregar la URL del API

import React from 'react'
import NewsList from '../news-list'

class NewsApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentWillMount() {
    fetch('http://url')
      .then((response) => {
        return response.json()
      })
      .then((posts) => {
        this.setState({ posts: posts })
      })
    }

    render() {
    if (this.state.posts.length > 0) {
      return (
        <div className="container-fluid">
          <NewsList list={this.state.posts} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando Noticias...</p>
    }
  }
}

export default NewsApp
