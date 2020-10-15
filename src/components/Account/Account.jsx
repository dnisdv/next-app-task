
import { Box } from '@material-ui/core'

import AccountMain from './AccountMain/AccountMain'
import AccountData from './AccountData/AccountData'
import AccountSettings from './AccountSettings/AccountSettings'
import {useState} from 'react'

const Account = () => {
    const [Settings, setSettings] = useState(false)

    const hadleSettings = () => {
        setSettings(!Settings)
    }
        return(
            <Box>
                <AccountMain Settings={Settings} hadleSettings={hadleSettings} />
                {!Settings ? <AccountData /> : <AccountSettings  setSettings={setSettings}/>}
            </Box>
    )
}

export default Account