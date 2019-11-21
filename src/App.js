import React, { Component } from 'react';
import TreeView from './components/TreeView';
import './styles/styles.scss';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <TreeView />
      </div>
    );
  }
}