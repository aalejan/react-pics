import React from 'react'
import { render } from 'react-dom'
import unsplash from './api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { images: [] }
  }

  async onSearchSubmit(term) {
    const respsonse = await unsplash.get('/search/photos', {
      params: { query: term },

    })

    this.setState({ images: respsonse.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
