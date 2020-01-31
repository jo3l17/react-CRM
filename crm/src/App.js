import React from 'react';
import './App.css';
import Header from './components/Header'
import { MuiThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles/Header';
import theme from './theme'
import Tablero from './pages/Tablero';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/tablero" component={Tablero} />
            </Switch>
          </main>
        </div>
      </BrowserRouter >
    </MuiThemeProvider>
  );
}

export default App;
