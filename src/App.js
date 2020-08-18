import React, { useRef, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/about/Header';
import hoverMoveAnimate from './components/util/hoverMoveAnimate';

function App() {
  const cursorRef = useRef(null);
  const testRef = useRef(null);

  useEffect(() => {
    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = x + 'px';
      cursorRef.current.style.top = y + 'px';
    }
    window.addEventListener('mousemove', editCursor);

    testRef.current.onmousemove = (e) => {
      hoverMoveAnimate(e, testRef.current);
    }
    testRef.current.onmouseleave = (e) => {
      hoverMoveAnimate(e, testRef.current);
    }

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div style={{ cursor: 'none' }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      <div className='nav-wrapper1'>
        <nav>
          <div href="" className='hover-this' ref={testRef}><span>Home</span></div>
          <div className='cursor' ref={cursorRef}></div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
