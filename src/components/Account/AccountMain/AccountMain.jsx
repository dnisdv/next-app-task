import { Box, Avatar, IconButton, Grid, Typography, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import AvatarExample from '../../../../public/img/AvatarExample.svg'
import {makeStyles} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const AccountMain = ({hadleSettings, Settings}) => {
    const classes = useStyles()
    return(
        <Box borderRadius="10px" className={classes.AccountMain} py='16px' px='10px'>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center">
                    <Avatar className={classes.Avatar} alt='Avatar' src={AvatarExample} ></Avatar>
                    <Box component="span">
                        <Typography fontWeight={600} className={classes.AccountName} variant='subtitle2'>Иванова Анна Михайловна</Typography> 
                    </Box>  
                    <Box ml="auto">
                            <Button 
                            className={classes.EditTitleDesktop} 
                            color='primary'
                            onClick={hadleSettings}
                            endIcon={Settings ? <CloseIcon className={classes.Icon} color='primary' />:<EditIcon className={classes.Icon} />}>{Settings ? "ЗАКРЫТЬ": "РЕДАКТИРОВАТЬ" }</Button>
                            
                            <IconButton onClick={hadleSettings} className={classes.EditTitle} aria-label="delete" >
                                {Settings ? <CloseIcon color='primary' />:<EditIcon color='primary' />}
                            </IconButton>
                    </Box>

            </Grid>
        </Box>
    )
}

  


const useStyles = makeStyles((theme) => ({
    Avatar:{
      width:'40px',
      height: '40px',
      [theme.breakpoints.up('lg')]: {
        width:"80px",
        height:"80px"
      },
    },
    AccountMain:{
        backgroundColor: "#1A78C2",
        padding: "16px 10px",
        marginTop:"10px",
        boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.15)",
        color:theme.palette.common.white,
        [theme.breakpoints.up('lg')]: {
            marginTop:"28px",
            padding: "24px 28px 24px 30px"
        },
    },
    AccountName: {
        marginLeft:"10px",
        fontWeight:"600",
        [theme.breakpoints.up('lg')]: {
            fontSize:"1.8rem",
            marginLeft:"42px"
        },
    },
    EditTitle:{
        display:'block',
        margin:0,
        padding:0,
        [theme.breakpoints.up('lg')]: {
            display:"none"
        },
    },
    EditTitleDesktop:{
        display:"none",
        margin: theme.spacing(1),
        color:theme.palette.common.white,
        fontWeight:"600",
        [theme.breakpoints.up('lg')]: {
            display:'flex'
        },
    },
    Icon:{
        color:theme.palette.common.white,
    }

}))

export default AccountMain