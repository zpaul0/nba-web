import React, { Component } from 'react';
import { TopNavBar } from './component/TopNavBar';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar/>
            </div>
        );
    }
}

export default App;
