import TopBar from '../src/components/AppBar/AppBar'
import { Box } from '@material-ui/core'
import CustomBreadcrumbs from '../src/components/BreadCrumbs/Breadcrumbs'
import {makeStyles} from '@material-ui/core'
import Account from '../src/components/Account/Account'


const Home = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
        <img src="img/background_main.png" className={classes.backgroundDecoration} alt="Background decoration" />
      <Box px={1.25}>
          <TopBar />
          <CustomBreadcrumbs />
          <Account />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>({
  root:{
    [theme.breakpoints.up('lg')]: {
      width:theme.breakpoints.values.lg,
      margin:"0 auto"
    },
  },
  backgroundDecoration :{
    position: "fixed",
    width: "100vw",
    height: "199px",
    top:"-",
    zIndex: "-1",
    left:"0",
    [theme.breakpoints.up('lg')]: {
      height:"470px"
    }
}
}))

export default Home