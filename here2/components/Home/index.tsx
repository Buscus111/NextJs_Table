import { Container, Content } from 'rsuite'
import { Sidebar, Nav, Sidenav, Button, FlexboxGrid } from 'rsuite'
import { signOut } from "next-auth/react"

import Menu from '../Menu'
import TableComponent from '../Table'
import styles from './styles.module.css'

type HomeProps = {
    data: any,
}

const Home = ({ data }: HomeProps) => {
    return (
        <Container className={styles.container}>
            <Menu />
            <Content className={styles.content}>
                <div className={styles.buttonContainer}>
                    <Button className={styles.button} onClick={() => signOut()} appearance="primary">Sign out</Button>
                </div>
                <TableComponent data={data} />
            </Content>
        </Container>
    );
}


export default Home