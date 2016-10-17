var React = require('react');
var FilmList = require('./FilmList');
var ShowtimeButton = require('./ShowtimeButton');
var Film = require('./film');

var sampleFilms = [{id: 1, title: "Chalet Girl", url: "http://www.imdb.com/title/tt1487118/?ref_=nv_sr_1"}, {id: 2, title: "Star Wars", url: "http://www.imdb.com/title/tt0076759/?ref_=fn_al_tt_1"}, {id: 3, title: "10 Things I Hate About You", url: "http://www.imdb.com/title/tt0147800/?ref_=fn_al_tt_1"}, {id: 4, title: "Rogue One", url:"http://www.imdb.com/title/tt3748528/?ref_=nv_sr_1"}];

var FilmBox = React.createClass({

  getInitialState: function(){
    return {data: sampleFilms}
  },

  render: function(){
    return (
      <div className="film-box">
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data}/>
        <ShowtimeButton/>
      </div>
      )
  }

});

module.exports = FilmBox;