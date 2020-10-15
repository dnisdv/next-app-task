import {Divider , Grid, Avatar, makeStyles, Typography} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AvatarExample from '../../../public/img/AvatarExample.svg'

const useStyles = makeStyles((theme) => ({
    TopBar:{  
      padding:"17px 0px",
      [theme.breakpoints.up('lg')]: {
        padding:"20px 26px"
      }
    },
    Avatar:{
      width:'24px',
      height: '24px',
      marginLeft:"10px",
      [theme.breakpoints.up('lg')]: {
        width:"40px",
        height:"40px"
      },
    },
    Divider:{
      backgroundColor:"#FFFFFF"
    },
    NotificationIcon:{
      width: "24px",
      height: "24px",
      marginRight:"10px",
      color:"white",
      [theme.breakpoints.up('lg')]: {
        width:"36px",
        height:"36px"
      },
    },
    Name:{
      marginLeft:"10px",
      display:"none",
      color:theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        display:"block",
        fontWeight:"600"
      },
    },
}))

const TopBar = () => {
  const classes = useStyles()
    return(
      <Grid
        className={classes.TopBar}
        container
        direction="row"
        justify="flex-end"
        alignItems="center">
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center">
                  <NotificationsNoneIcon className={classes.NotificationIcon} />
                  <Divider className={classes.Divider} orientation="vertical" flexItem light/>
                  
                    <Avatar className={classes.Avatar} src={AvatarExample}>H</Avatar>

                    <Typography ml={20} variant="subtitle2" color="primary" className={classes.Name} >Иванова А.</Typography>
              </Grid>
      </Grid>
    )
}

export default TopBar