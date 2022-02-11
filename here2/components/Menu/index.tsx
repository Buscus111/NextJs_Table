import { useState } from 'react'
import { Sidebar, Nav, Sidenav, Button, FlexboxGrid } from 'rsuite'
import { signOut } from "next-auth/react"
import GearIcon from '@rsuite/icons/Gear'
import TableIcon from '@rsuite/icons/Table'
import ImportIcon from '@rsuite/icons/Import'
import PeoplesIcon from '@rsuite/icons/Peoples'

import NavToggle from '../NavToggle'
import styles from './styles.module.css'

const Menu = () => {
    const [expand, setExpand] = useState(true);
    return (
        <Sidebar
            className={styles.root}
            width={expand ? 200 : 56}
            collapsible
        >
            <Sidenav expanded={expand} defaultOpenKeys={['4']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<TableIcon />}>
                            Main
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
                            Contacts
                        </Nav.Item>
                        <Nav.Item eventKey="3" icon={<ImportIcon />}>
                            Import
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<GearIcon />}>
                            Sync
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            {/* <Button onClick={() => signOut()} appearance="primary">Sign out</Button> */}
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>
    )
}

export default Menu