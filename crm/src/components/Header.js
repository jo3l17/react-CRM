import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BuildIcon from '@material-ui/icons/Build';
import useStyles from '../styles/Header';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tablero from '../pages/Tablero';

function Header(props) {
  const toggleHandleDrawer = () => {
    setOpen(!open);
  };
  const handleDrawerMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const MenuDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const preventDefault = event => event.preventDefault();
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Tools = (
    <div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary={"Editar"} />
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Agregar"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"ejemplo"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"ejemplo"} />
        </ListItem>
      </List>
    </div>
  );
  const Navigation = (
    <div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/tablero">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Tablero"} />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to="/clientes">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Clientes"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/estadisticas">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Estadisticas"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/usuario">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Usuario"} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.toolOpenPC]: open,
        })}
      >
        <Toolbar>
          <Hidden smUp implementation="css" >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerMobileToggle}
              className={classes.menuButton}
            >
              <BuildIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleHandleDrawer}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <BuildIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap className={classes.title}>
            <Hidden xsDown implementation="css" className={classes.links}>
              <Link to="/tablero" className={classes.link} variant="body2">
                Tablero
                </Link>
              <Link to="/clientes" className={classes.link} color="primary">
                Clientes
                </Link>
              <Link to="/estadisticas" className={classes.link} color="primary">
                Estadisticas
                </Link>
            </Hidden>
          </Typography>
          <Hidden xsDown implementation="css">
            <IconButton
              color="inherit"
              edge="end"
              component={Link} to="/usuario"
            >
              <AccountCircleIcon />
            </IconButton>
          </Hidden>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={MenuDrawerToggle}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={toggleHandleDrawer}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          {Tools}
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css" >
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerMobileToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {Tools}
        </Drawer>
      </Hidden>
      <Drawer open={menuOpen} anchor="top" onClose={MenuDrawerToggle}>
        {Navigation}
      </Drawer>
    </div>
  )
}
export default Header;