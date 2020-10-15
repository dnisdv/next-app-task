import { Box, Grid, Typography, Divider, makeStyles } from '@material-ui/core'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const AccountData = () => {
    const classes = useStyles()
    return(
        <Box className={classes.AccountData}
            component="div" borderRadius="10px"  mt={"11px"}>
            <Grid container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                >
                <Box className={classes.DataItem}>
                    <Grid item
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >   
                        <AlternateEmailIcon className={classes.MailIcon} color="secondary" />
                        <Typography className={classes.ItemTitle} fontWeight={400} >Ivanova@mail.ru</Typography>
                    </Grid>
                </Box>
                <Divider className={classes.root} />
                <Box className={classes.DataItem}>
                        <Grid item
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        >
                        <PhoneIcon className={classes.PhoneIcon } color="secondary" />
                        <Typography className={classes.ItemTitle} fontWeight={400}>Укажите номер телефона</Typography>
                    </Grid>
                </Box>
            </Grid>
            </Box>
    )
}

const useStyles = makeStyles((theme) =>({
    AccountData:{
        boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.15)",
        backgroundColor:"White"
    },
    DataItem:{
        padding:"20px 10px",
        [theme.breakpoints.up('lg')]: {
            display:"block" ,
            padding:"33px 77px"
        },
    },
    ItemTitle:{
        fontWeight:400,
        fontSize:theme.typography.subtitle2.fontSize,
        marginLeft:"10px",  
        [theme.breakpoints.up('lg')]: {
            fontSize:theme.typography.h7.fontSize,
            marginLeft:"42px"
        },
    },
    MailIcon:{
        fontSize:"20px",
        [theme.breakpoints.up('lg')]: {
            fontSize:"30px"
        },
    },
    PhoneIcon:{
        fontSize:"18px",
        [theme.breakpoints.up('lg')]: {
            fontSize:"27px"
        },
    }
}))

export default AccountData