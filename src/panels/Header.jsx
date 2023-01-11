import {Fragment} from 'react'
import { HContainer, Title, Login} from './HeaderStyles'
import {IoIosJournal, IoIosLogIn} from 'react-icons/io'

const Header = (props) => {
    return (
        <Fragment>
            <HContainer>
                        <Title>
                                <IoIosJournal/> JOURNAL
                        </Title>
                        <Login><IoIosLogIn/> Login</Login>
            </HContainer>
        </Fragment>
    )
}
export default Header