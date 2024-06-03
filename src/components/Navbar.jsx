import { Box } from "@chakra-ui/react"

import style from "./Navbar.module.css"

export default function Navbar(){
    return (
    <Box className={style.navbar}>
        <ul style={{ display:'flex', flexDirection:'row' }}>
            <li ><a href="/"> Home </a></li>
            <li ><a href="/login"> Login </a></li>
            <li ><a href="/register"> Register </a></li>
        </ul>
    </Box>)
}