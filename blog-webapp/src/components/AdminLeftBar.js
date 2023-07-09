import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminLeftBar = () => {
    return (
        <div className="left-bar">
            <div className='bar-header'>
                <Link to={"/dashboard"}>
                    <Image src='../assets/images/logo.png' thumbnail={true} responsive={true} />
                </Link>
                <div>
                    <Button className='btn btn-light' size='lg' style={{ backgroundColor: "#fff" }} ><ion-icon name="menu-outline"></ion-icon></Button>
                </div>
            </div>
            <div className='bar-body'>
                <div className='bar-content'> 
                    <div className='header-content'>
                        BLOG MANAGER
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="people-outline"></ion-icon><span>Manager List</span></li>
                            <li className='left-content'><ion-icon name="person-add-outline"></ion-icon><span>Add new manager</span></li>
                        </ul>
                    </div>
                </div>
                <div className='bar-content'> 
                    <div className='header-content'>
                        CHAT
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chatbox</span></li>
                        </ul>
                    </div>
                </div>
                <div className='bar-content'> 
                    <div className='header-content'>
                        FEEDBACK
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="chatbox-ellipses-outline"></ion-icon><span>Feedback</span></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLeftBar;