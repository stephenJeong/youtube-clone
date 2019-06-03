class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state ={
    //   input: ''
    // };
    this.input = '';
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    // this.setState({
    //   input: event.target.value
    // })
    this.input = event.target.value;
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChangeSearch} />
        <button className="btn hidden-sm-down" onClick={this.props.get(this.input)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
