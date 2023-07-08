import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/addNewBlogManager.css'

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
                        MAIN NAVIGATION
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>akjsdkjasdijasd</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                        </ul>
                    </div>
                </div>
                <div className='bar-content'> 
                    <div className='header-content'>
                        MAIN NAVIGATION
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>akjsdkjasdijasd</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                        </ul>
                    </div>
                </div>
                <div className='bar-content'> 
                    <div className='header-content'>
                        MAIN NAVIGATION
                    </div>
                    <div className='body-content'>
                        <ul className='p-0'>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>akjsdkjasdijasd</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                            <li className='left-content'><ion-icon name="chatbubbles-outline"></ion-icon><span>Chat</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLeftBar;