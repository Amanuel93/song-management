import Addis from '../assets/Addis-software.jpg'
import { Flex } from './Stylels/Container'

const Footer = () => {
  return (
    <Flex color='#1b2631' padding="30px" content="center">
      <img src={Addis} alt="Addis software logo" className='logo'/>
      <p>© 2024 All rights reserved</p>
    </Flex>
  )
}

export default Footer