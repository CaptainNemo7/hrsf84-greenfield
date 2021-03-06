import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx'
import Carousel from './components/Carousel.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

// Adding three states. Definitely using currentPhoto
// Putting placeholders for loggedIn and favoritesView for now
    this.state = {
      currentPhoto: {},
      loginStatus: '',
      favoritesView: ''

    }
  }


  componentDidMount() {
    $.ajax({
      url: '/photos',
      success: (data) => {
        if (data) {
          console.log(data)
          this.setState({
            currentPhoto: {src: data} || {src: 'http://images2.fanpop.com/image/photos/13300000/Cute-Puppy-puppies-13379766-1280-800.jpg'}
          })
        }
        console.log('setState for displaying a photo');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  render () {
    return (
    <div>
      <div className='header-bar'>
        <div className='header'>IMPULSE </div>
        <Login 
          className='login' 
          loginStatus={this.state.loginStatus}
        />
      </div>
        
      <Carousel 
        className='carousel' 
        currentPhoto={this.state.currentPhoto} 
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));