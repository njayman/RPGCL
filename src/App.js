import { Fragment, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import './App.scss';
import MainBody from './components/layouts/MainBody';
import { setUsers } from './redux/actions/AuthActions';

function App() {
  //console.log(props)
  useEffect(() => {
    setUsers()
  }, [])
  return (
    <Fragment>
      <Switch>
        <MainBody />
      </Switch>
    </Fragment>
  );
}

export default App;
