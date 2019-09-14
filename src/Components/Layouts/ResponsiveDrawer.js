import React from 'react';
import { Link } from 'react-router-dom'

/* Material Components */
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

/* Icons */
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuIcon from '@material-ui/icons/Menu';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>

        <ListItem button component={Link} to={'/'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

      </List>      

      <Divider />
      
      <List>
        
        <ListItem button component={Link} to={'/aboutus'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        
        <Badge style={{marginLeft:'150px', marginTop:'30px'}} badgeContent={'New'} color="secondary"></Badge>
          <ListItem button component={Link} to={'/events'} onClick={handleDrawerToggle}>
            <ListItemIcon>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>

        <ListItem button component={Link} to={'/achievements'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <EqualizerRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Achievements" />
        </ListItem>

        <ListItem button component={Link} to={'/team'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <PeopleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>

        <ListItem button component={Link} to={'/mentorship'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <PersonRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Mentorship" />
        </ListItem>

      </List>

      <Divider />

      <List>

        <ListItem button component={Link} to={'/groups'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <PeopleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>

        <ListItem button component={Link} to={'/resources'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <ContactsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={Link} to={'/contactus'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <ContactsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>


      </List>
    </div>
  );

  return (
    <div>
      {/* <CssBaseline /> */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
        >
            <MenuIcon />
        </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
