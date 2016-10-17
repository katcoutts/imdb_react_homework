var React = require('react');
var Film = require('./film.jsx')

var FilmList = React.createClass({

  render: function(){

    var filmNodes = this.props.data.map(
       function(film, index){
        return (
          <Film title={film.title} key={film.id} url={film.url}></Film>
          )
    })

    return (
      <div>
        {filmNodes}
      </div>
      )
  }


});

module.exports = FilmList;