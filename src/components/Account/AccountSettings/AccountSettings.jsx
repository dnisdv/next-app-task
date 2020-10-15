import { Box, Divider, Grid, Typography, TextField, makeStyles, Button } from '@material-ui/core'
import {useState} from 'react'
import Modal from '../Modal/Modal'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {validateEmail, validateName, formatNumber} from "../../../lib/lib"
import useMediaQuery from '@material-ui/core/useMediaQuery';


const AccountSettings = ({setSettings}) => {
    const matches = useMediaQuery('(max-width:1308px)');

    const classes = useStyles();
    const [ToggleModal, setToggleModal] = useState(false)
    const [Confirmed, setConfirmedModal] = useState(false)
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        isError: {
            name: '',
            email: '',
            phone: ''
        }
    })

    const formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = FormData.isError;
        switch (name) {
            case "name":
                if(!validateName(value)){
                    isError.name = "Вы неверно указали имя"
                }else if(value.length === 0){
                    isError.name = "Это поле не может быть пустым"
                }else{
                    isError.name = ""
                }
                setFormData({
                    ...FormData,
                    isError,
                    [name]:  value
                })

                break;
            case "email":
                isError.email = validateEmail(value)
                    ? ""
                    : "Вы неверно указали email";
                setFormData({
                    ...FormData,
                    isError,
                    [name]:  value
                })
                break;
            case "phone":
                const parsedValue = value.replace(/^\+7\s/, "")
                const newValue = formatNumber(parsedValue)
                if(newValue === ""){
                    return setFormData({
                        ...FormData,
                        isError,
                        phone: ""
                    })
                }
                isError.phone = ""
                if(newValue.length < 10 ){
                    isError.phone = "Вы неверно указали номер телефона"
                }

                setFormData({
                    ...FormData,
                    isError,
                    phone:"+7 " + newValue
                })
                
                break;
            default:
                break;
        }
    }

    const formValid = ({ isError, name, email, phone }) => {
        if(name.length === 0) {
            isError.name="Это поле обязательное"
        }
        if(email.length === 0) {
            isError.email="Это поле обязательное"
        }
        if(phone.length === 0) {
            isError.phone="Это поле обязательное"
        }
        setFormData({
            ...FormData,
            isError: isError
        })
    
        let isValid = true;
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            }
        });
        return isValid;
    };

    const handleModalClose = () => {
        setToggleModal(false)
    }
    const closeModalSubmit = () => {
        setToggleModal(false)
        setSettings(false)
    }

    const sumbitSettings = (e) => {
        e.preventDefault()
        if (formValid(FormData)) {
            setConfirmedModal(false)
            setToggleModal(true)
        } 
    }

    const confirmModalSubmit = async () => {
        const {name, email, phone} = FormData
        setConfirmedModal(true)
        if(matches){
            setTimeout(() => {
                setToggleModal(false)
                setSettings(false)
            }, 1000);
        }
        const User = JSON.stringify({name, email, phone})
        localStorage.setItem("user", User)
        fetch("http://jsonplaceholder.typicode.com/posts", { 
            method: "POST", 
            body:User,
            headers: { 
                "Content-type": "application/json",
                "x-token-access": "random"
            } 
        }) 
    }
    return(
        <Box>
            <Box className={classes.Box}  px="23px" py="26px"
                component="div" borderRadius="10px" mt="11px">
                <Modal
                    disableEnforceFocus
                    disableAutoFocus
                    closeModalSubmit={closeModalSubmit}
                    confirmed={Confirmed}
                    open={ToggleModal}
                    onClose={handleModalClose}
                    confirmSubmit={confirmModalSubmit}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                />
            <form onSubmit={sumbitSettings} className={classes.root} noValidate autoComplete="off">
            <Grid
                    container
                    className={classes.SettingsWrapper}
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Box component="div" className={classes.InputWrapper}>
                            <AssignmentIndIcon className={classes.Icon} style={{ width:"30px", height:"30px" }}  color="secondary" />
                            <TextField
                                error={!!(FormData.isError.name)}
                                onChange={formValChange}
                                className={classes.textField}
                                id="outlined-full-width"
                                label={<Typography className={classes.LabelField} >Фамилия и имя</Typography>}
                                placeholder="Укажите ваши фамилию и имя"
                                margin="normal"
                                color="secondary"
                                value={FormData.name}
                                style={{ fontSize:"29px"}}
                                inputProps={{style: {fontSize: "0.875rem", paddingTop:"22px"}}} 
                                InputLabelProps={{
                                    shrink: true,
                                    style:{
                                        transform:"translate(14px, -8px)",
                                        width:'91px',
                                        backgroundColor:"white"
                                    }
                                }}  
                                name="name"
                                variant="outlined"
                                helperText={FormData.isError.name ? <Box m={0} component="span" className={classes.ErorFeedBack}>{FormData.isError.name}</Box> : ""}
                            />
                        </Box>
                        <Box component="div" className={classes.InputWrapper}>
                            <Divider className={classes.Divider} orientation="vertical" flexItem light/>
                            <AlternateEmailIcon className={classes.Icon} style={{fontSize:"30px" }} color="secondary" />
                                <TextField
                                    error={!!(FormData.isError.email)}
                                    onChange={formValChange}
                                    className={classes.textField}
                                    id="outlined-full-width"
                                    value={FormData.email}
                                    label={<Typography className={classes.LabelField}>E-mail</Typography>}
                                    placeholder="Ivanova@mail.ru"
                                    margin="normal"
                                    color="secondary"
                                    inputProps={{style: {fontSize: "0.875rem", paddingTop:"22px"}}} 
                                    InputLabelProps={{
                                        shrink: true,
                                        disableAnimation:false,
                                        style:{
                                            transform:"translate(14px, -8px)",
                                            width:'91px',
                                            backgroundColor:"white"
                                        }
                                    }}
                                    name="email"
                                    variant="outlined"
                                    helperText={FormData.isError.email ? <Box component="span" className={classes.ErorFeedBack}>{FormData.isError.email}</Box> : ""}
                                />
                        </Box>
                        <Box component="div"  className={classes.InputWrapper}>
                            <Divider className={classes.Divider} orientation="vertical" flexItem light/>
                            <PhoneIcon className={classes.Icon} style={{ fontSize:"27px" }} color="secondary" />
                            <TextField
                                error={!!(FormData.isError.phone)}
                                onChange={formValChange}
                                className={classes.textField}
                                value={FormData.phone}
                                id="outlined-full-width"
                                label={<Typography className={classes.LabelField}>Номер телефона</Typography>}
                                placeholder="Укажите номер телефона"
                                margin="normal"
                                color="secondary"
                                inputProps={{style: {fontSize: "0.875rem", paddingTop:"22px"}}} 
                                InputLabelProps={{
                                    shrink: true,
                                    style:{
                                        transform:"translate(14px, -8px)",
                                        width:'100px',
                                        backgroundColor:"white"
                                    }
                                }}
                                name="phone"
                                variant="outlined"
                                helperText={FormData.isError.phone ? <Box component='span' className={classes.ErorFeedBack}>{FormData.isError.phone}</Box> : ""}
                            />
                        </Box>
                </Grid>
                <Grid
                    container
                    className={classes.ButtonWrapper}
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Button 
                        type='submit'
                        className={classes.Button}
                        variant="contained" 
                        color="secondary">
                        <Typography style={{fontSize:"0.875rem", fontWeight:"600"}} variant="inherit" fontWeight={600}>Сохранить изменения</Typography>
                    </Button>
                </Grid>
            </form>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    Box:{
        padding:"26px 23px 17px 23px",
        boxShadow:"3",
        borderRadius:"14px",
        margintop:"11px",
        backgroundColor:"White",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        [theme.breakpoints.up('lg')]: {
            padding:"26px 0px 0px 0px"
        }
    },
    SettingsWrapper:{
        flexDirection:"column",
        justifyContent:"center",
        [theme.breakpoints.up('lg')]: {
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"0px 70px 0px 34px"
        }
    },
    InputWrapper:{
        width:"100%",
        margin:"0px",
        marginTop:"39px",
        "&:first-child": {
            marginTop:"0px"
        },
        boxSizing:"border-box",
        [theme.breakpoints.up('lg')]: {
            width:"auto",
            margin:"0px",
            display:"flex",
            alignItems:"center",
            height:"97px",

        }
    },
    Icon:{
        display:"none",
        [theme.breakpoints.up('lg')]: {
            display:"block"
        },
    },
    Button:{
        width:"212px",
        height:"49px",
        marginTop:"26px",
        borderRadius:"36px",
        fontSize: theme.typography.subtitle2.fontSize,
        color:theme.palette.common.white,
        textTransform:"none",
        boxShadow:"none",
        "&:active":{
            boxShadow:"none",
        },
        "&:hover":{
            boxShadow:"none",
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom:"44px",
            marginTop:"29px"
        }
    },
    textField: {
        width: '100%',
        transform:"none",   
        margin:"0px",
        [theme.breakpoints.up('lg')]: {
            marginLeft:"46px",
            width:"254px",
        },
      },    
    LabelField: {
        fontSize:"0.75rem"
    },
    ErorFeedBack:{
        fontSize: theme.typography.caption.fontSize,
        position:"absolute",
        margin:0,
        bottom:"-17px"
    },
    Divider:{
        backgroundColor:theme.palette.primary.main,
        marginRight:"29px"
    }
  }));


export default AccountSettings