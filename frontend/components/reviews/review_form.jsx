import React from 'react';

//default state of a string is an empty string.
class ReviewForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rating: 10,
      title: "",
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  //Normal way to handle change of state in a drop-down
  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      rating: this.state.rating,
      title: this.state.title,
      body: this.state.body
    }
    let that = this;
    if (this.props.currentUser) {
      this.props.createReview(this.props.businessid, review);
    }
  }

  reviewForm() {
    return (
      <section className="book-trip-page">
        <form className="form-horizontal">Write a review
          {this.selectRating()}
          <div className="say-hello-container">REview title:
            <textarea autoFocus="autofocus" className="say-yo" value={this.state.title} onChange={this.handleSelectChange('title')}
            />
          </div>
          <div className="say-hello-container">Tell everyone about your experience:
            <textarea className="say-yo" value={this.state.body} onChange={this.handleSelectChange('body')}
            />
          </div>
          <button className="tosubmitdarkblue bk-tp-btn post-review" onClick={(e) => this.handleSubmit(e)}>
            <span className="btn-text">
              Post Review
            </span>
          </button>
        </form>
      </section>
    )
  }

  selectRating() {
    const opts = [];
    let i = 1;
    while (i <= 10)
    {
      opts.push(
        <option value={i}
        key={i}
        >{i}</option>
      )
      i++;
    }
    return (
      <div className="book-column">
        <div className='select-container book-txt'>
          <label className="book-label"/>How would you rate your experience?
          <div className='select-dd-container book-dd'>
            <select className='select-dropdown select-bk-dd' value={this.state.rating}
              onChange={this.handleSelectChange('rating')}
            >{opts}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="review-form">
        {this.reviewForm()}
      </div>
    )
  }
}

export default ReviewForm