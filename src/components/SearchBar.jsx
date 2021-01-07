import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: 'Begin Search' }
  }

  onFormSubmit(event) {
    event.preventDefault()
    
    this.props.onSubmit(this.state.term)
  }

  onClickHandler(event){
    if(this.state.term === 'Begin Search'){
     return this.setState({ term: event.target.value = '' })
    }
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
          <div>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
              onClick={this.onClickHandler.bind(this)}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
