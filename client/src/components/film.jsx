var React = require('react');

var Film = React.createClass({

  render: function(){
    return (
      <div className="film">
        <a href={this.props.url} className="filmTitle">
          {this.props.title}
        </a>
      </div>
      )
  }

})



module.exports = Film;