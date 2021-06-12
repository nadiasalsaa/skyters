import React from 'react';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './asset/Feeds.css'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import a2 from './asset/image/a2.jpg';
import a3 from './asset/image/a3.jpg';
import a4 from './asset/image/a4.jpg';
import sl2 from './asset/image/sl2.jpg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles((theme) => ({
  
 
  like:{
    marginLeft:'auto',
  },
  comment:{
    marginRight: '0px',
  },
  share:{
    marginRight: '10px',
  },
  avatar: {
    width:'50px',
    height: '50px',
    border: '2px solid #FFFFFF',
    filter: 'drop-shadow(-1px 1px 4px rgba(120, 130, 146, 0.5))',
  },
  ava: {
    width:'50px',
    height: '50px',
    border: '2px solid #FFFFFF',
    filter: 'drop-shadow(-1px 1px 4px rgba(120, 130, 146, 0.5))',
    marginLeft: '10px',
  },
  
  margin: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  
  com: {
    borderRadius: 10,
    position: 'relative',
    color: '#000000',
    backgroundColor: '#F1F2F6',
    border: '1px solid #F1F2F6',
    fontSize: 12,
    width: '485px',
    height: '30px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins', 
      'sans-serif',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade('#F1F2F6', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#F1F2F6',
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: 'relative',
    color: '#000000',
    backgroundColor: '#F1F2F6',
    border: '1px solid #F1F2F6',
    fontSize: 12,
    width: '485px',
    height: '30px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins', 
      'sans-serif',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade('#F1F2F6', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#F1F2F6',
    },
  },
}))(InputBase);


const options = [
  'Ubah Komentar',
  'Hapus Komentar',
]
export default function Cards() {
    
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [colors, setColor] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleColors = (event) => {
    setColor(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  return (
    <div>
          <Card className="card">
            <CardHeader className="post"
                action={
                  <IconButton aria-label="settings">
                    <ArrowUpwardIcon />
                  </IconButton>
                }
                
              subheader={
                <a className="time">What's on you mind, Paul?</a>
              }
                // subheader= "What's on you mind, Paul?"
                />
          </Card>
          <Card className="card">
            <CardHeader
              avatar={
                <Avatar aria-label="ava" className={classes.avatar} src={a3}>
                  
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
              title={
                <a className="title">Thomas Ben</a>
              }
              
              
              subheader={
                <a className="time">45 mins ago</a>
              }
            />
            <CardContent className="content">
              <a className="pub" >
                Being a father is sometimes my hardest but always my most rewarding job.
                <br/> 
                Happy Father's Day to all dads out there.
              </a>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton 
                className={classes.like} 
                aria-label="fav"
                >
                <Badge badgeContent={4}>
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton 
                  className={classes.comment} 
                  aria-label="comment"
                >
                  <Badge badgeContent={4}>
                    <MessageIcon />
                  </Badge>
              </IconButton>
              <IconButton 
                  className={classes.share} 
                  aria-label="Share"
                >
                  <Badge badgeContent={4}>
                    <ShareIcon />
                  </Badge>
              </IconButton>
              
            </CardActions>
          </Card>

      <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="ava" className={classes.avatar} src={a2}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <a className="title">Miranda Shaffer</a>
        }
        
        
        subheader={
          <a className="time">June 21, 12:45pm</a>
        }
        
      />
      <CardContent className="content">
        <a className="pub" >
          Having fun while cooking and eating variety of foods with <span></span> 
          <a className="tag">@Sarah</a>
        </a >
      </CardContent>
      <CardMedia
        className="media"
        image={sl2}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton 
          className={classes.like} 
          aria-label="fav"
          >
          <Badge badgeContent={4}>
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton 
            className={classes.comment} 
            aria-label="comment"
          >
            <Badge badgeContent={4}>
              <MessageIcon />
            </Badge>
        </IconButton>
        
        <IconButton 
            className={classes.share} 
            aria-label="Share"
            thumbSwitchedStyle={{ backgroundColor: '#e36387' }}
          >
            <Badge badgeContent={4}>
              <ShareIcon />
            </Badge>
        </IconButton>

      </CardActions>
      
      <div className="comm">
          <Avatar aria-label="ava" className="profile" src={a4}></Avatar>
          <div className="ccard">
              <p className="coname">
                Mary Jane Watson 
              </p>
              <p className="cpost">Itu gimana cara masaknya gan?</p>
              
          </div>
          <IconButton
            aria-label="more"
            // aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
              <MoreHorizIcon/>
          </IconButton>

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option}  onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>

      </div>
      <div className="comm">
          <Avatar aria-label="ava" className="profile" src={a3}></Avatar>
          <div className="ccard">
              <p className="coname">
                  Bibi May  
              </p>
              <p className="cpost">Kayanya gampang deh...cek dulu di youtube</p>
              
          </div>
          <IconButton
            aria-label="more"
            // aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
              <MoreHorizIcon/>
          </IconButton>

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option}  onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>

      </div>
      <div className="comm">
          <Avatar aria-label="ava" className="profile" src={a4}></Avatar>
          <div className="ccard">
              <p className="coname">
                Miles Morales  
              </p>
              <p className="cpost">Ikutan dong, mau buat juga</p>
              
          </div>
          <IconButton
            aria-label="more"
            // aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
              <MoreHorizIcon/>
          </IconButton>

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option}  onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>

      </div>

      <FormControl className={classes.margin}>
        <CardHeader className="commen"
          avatar={
            
            <Avatar aria-label="ava" src={a4}></Avatar>
          }
          subheader={
            <BootstrapInput placeholder="Tulis komentar kamu.."  id="bootstrap-input" className="ip" />
          }
          
        />
        </FormControl>
      
      </Card>

      <Card className="card">
            <CardHeader
              avatar={
                <Avatar aria-label="ava" className={classes.avatar} src={a3}>
                  
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
              title={
                <a className="title">David Cox</a>
              }
              
              
              subheader={
                <a className="time">June 21, 11:30am</a>
              }
            />
      </Card>
    </div>

  );
}
