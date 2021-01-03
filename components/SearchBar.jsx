import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: 'Begin Search'.toUpperCase() }
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
              onClick={event => this.setState({ term: event.target.value = '' })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
