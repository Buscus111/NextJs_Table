import { Navbar, Nav} from 'rsuite'
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine'
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine'


const NavToggle = ({ expand, onChange }: { expand: boolean, onChange: () => void }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavToggle