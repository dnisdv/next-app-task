import {Modal, Box, makeStyles, Button, Typography, Slide, Fade, Grid} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const myModal = ({open, onClose, confirmSubmit, confirmed, closeModalSubmit}) => {
  const classes = useStyles({confirmed, open})
  const matches = useMediaQuery('(max-width:1308px)');

  const content = (<Box className={classes.Modal} >
    {!confirmed 
      ? 
    <Box>
      <CloseIcon onClick={onClose} className={classes.closeIcon} />
      <Grid
            className={classes.ModalItem}
            container
            direction="column"
            justify="center"
            alignItems="center">
        <Typography className={classes.ModalTitle}>Сохранить изменения?</Typography>
            <Box mt="40px">
              <Button 
                  onClick={confirmSubmit}
                  type='submit'
                  className={classes.Button}
                  variant="contained" 
                  color="secondary">
                  <Typography className={classes.ButtonTypography} color="inherit" >Сохранить</Typography>
              </Button>
            </Box>
            <Box mt="28px">
              <Button  onClick={onClose}
                  type='submit'
                  className={classes.Button}
                  variant="outlined" 
                  color="secondary">
                  <Typography className={classes.ButtonTypography} color="secondary">Не сохранять</Typography>
              </Button>
            </Box>
          </Grid>
        </Box>
        :
        <Fade timeout={matches ? 800: 200} in={true}><Grid
            style={{height:"100%"}}
            container
            height="100%"
            direction="column"
            justify="center"
            alignItems="center">
              <Typography className={classes.FeedBack} align="center" container="div">Данные успешно сохранены</Typography>
              <Box className={classes.FeedbackButtonWrapp} mt="42px">
                <Button 
                    onClick={closeModalSubmit}
                    type='submit'
                    className={classes.FeedbackButton}
                    variant="contained" 
                    color="secondary">
                    <Typography className={classes.ButtonTypography} variant="subtitle2" color="inherit">Хорошо</Typography>
                </Button>
              </Box>
        </Grid></Fade >}
  </Box>)

    return(
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          disableEnforceFocus
          className={classes.ModalWrapp}
          open={open}
          onClose={onClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        > 

        {!matches ? 
            <Fade in={open}>
                {content}
            </Fade>
            :
            <Slide onEntered={(node) => {
              node.style.transition = "all 222ms"
            }} direction="up" in={open} mountOnEnter unmountOnExit>
              {content}
            </ Slide >
            }

        </Modal>
    )
}

const useStyles = makeStyles( (theme) => ({
  Modal:{
    position:'fixed',
    bottom:"0",
    width:"100vw",  
    height: props => !props.confirmed ? "75vh" : "10vh",
    backgroundColor:"white",
    borderTopRightRadius:'22px',
    borderTopLeftRadius:'22px',
    [theme.breakpoints.up('lg')]: {
      width:"600px",
      height: props => !props.confirmed ? "320px" : "320px",
      top:"22.7vh",
      left:"50%",
      borderRadius:"10px",
      transform:"translateX(-50%) !important",
    }
  },
  ModalWrapp:{
    "& :focus":{
      outline:"none"
    }
  },
  ModalItem:{
    marginTop:'65px'
  },
  Button:{
    width:"202px",
    height:"50px",
    borderRadius:"36px",
    fontSize: "0.875rem",
    fontWeight:"600",
    color:theme.palette.common.white,
    boxShadow:"none",
    "&:active":{
      boxShadow:"none",
    },
    "&:hover":{
        boxShadow:"none",
  },
  },
  closeIcon:{
    position:"absolute",
    right:"20px",
    top:"20px"
  },
  FeedBack:{
    fontSize:"1.125rem",
    color:"rgb(49 49 49 / 70%)",
    fontWeight:"600",
    [theme.breakpoints.up('lg')]: {
      fontSize:"1.5rem",
    }
  },
  FeedbackButton:{
    display:"none",
    color:theme.palette.common.white,
    boxShadow:"none",
    boxShadow:"none",
    "&:active":{
      boxShadow:"none",
    },
    "&:hover":{
        boxShadow:"none",
    },
    [theme.breakpoints.up('lg')]: {
      width:"212px",
      height:"49px",
      borderRadius:"36px",
      fontSize: "0.875rem",
      display:"block"
    }
  },
  FeedbackButtonWrapp:{ 
    display:"none",
    [theme.breakpoints.up('lg')]: {
      display:"block"
    }
  },
  ModalTitle:{
    fontSize: "1.125rem",
    color:"rgb(49 49 49 / 70%)",
    fontWeight:"600",
    [theme.breakpoints.up('lg')]: {
      fontSize:"1.5rem"
    }
  },
  ButtonTypography:{
    textTransform:"none",
    fontSize:"0.875rem",
    fontWeight:"600"
  }
}))

export default myModal