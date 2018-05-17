import React, {Component} from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import Footer from '../../components/Footer/Footer';
import {Route} from 'react-router-dom';
import Dishes from '../Dishes/Dishes';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <main>
          <Route exact path='/' component={Categories}/>
          <Route exact path='/category/:id' component={Dishes}/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
