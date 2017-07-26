import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    const input = document.getElementById('searchTextField');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/test`)
    // this.setState({place: this.input.value});
    // let currentInput = this.input.value;

    // e.target.firstChild.value = '';
  }

  render() {

    return(
      <form className="search-container" ref={form => this.form = form} onSubmit={this.handleSubmit}>
        <input
          type="search"
          id="searchTextField"
          className="search-bar"
          placeholder="poke, burritos, pizza..."
          ref={input => this.input = input}
          onChange={this.update('place')}
        />
    </form>
    );
  }
}

export default withRouter(SearchBar);