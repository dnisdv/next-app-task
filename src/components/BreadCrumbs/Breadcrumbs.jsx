import { Box, Breadcrumbs, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    separator: {
        margin:"0px",
        padding:"0px"
    },
    BreadWrapper:{
        marginTop:"10px",
        [theme.breakpoints.up('lg')]: {
            marginTop:"10px"
        }
    },
    BreadTitle:{
        fontSize:theme.typography.subtitle2.fontSize,
        fontWeight:"600",
        color:theme.palette.common.white,
        lineHeight:"19px",
        [theme.breakpoints.up('lg')]: {
            fontSize:theme.typography.h7.fontSize,
            lineHeight: "25px"
          } 
    },
    BreadItem:{
        lineHeight: "16px",
        fontSize:theme.typography.caption.fontSize,
        color:theme.palette.common.white,
        [theme.breakpoints.up('lg')]: {
            fontSize:theme.typography.subtitle2.fontSize,
            lineHeight: "19px"
          }
    }

  }));

const CustomBreadcrumbs = () => {
    const classes = useStyles()
    return(
        <Box component="div">
            <Typography className={classes.BreadTitle} variant='subtitle2'color="primary" >ЛИЧНЫЙ ПРОФИЛЬ</Typography>
            <Box mt={'5px'}>
                <Breadcrumbs classes= {{
                        separator: classes.separator
                    }}
                    separator={<Typography
                        className={classes.Breadcrumb}  
                    component="span" variant="caption" color="primary">/</Typography>} 
                    aria-label="breadcrumb">
                        <Typography className={classes.BreadItem} variant="inherit" color="primary" >Главная</Typography>
                        <Typography className={classes.BreadItem} variant="inherit" color="primary" >Личный профиль</Typography>
                </Breadcrumbs>
            </Box>
        </Box>
    )
}

export default CustomBreadcrumbs