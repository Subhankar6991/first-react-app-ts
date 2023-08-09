import React from 'react';
import './App.css';
import Demo from './components/Demo';
import StickyHorizontalScrollbar from './components/StickyHorizontalScrollbar';

function App(): React.JSX.Element {
  return (
    <div>
      <StickyHorizontalScrollbar />
    </div>
  );
}

export default App;
