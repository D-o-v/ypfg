import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainBody = () => {
    return (
        <div className='m-0 p-0 flex flex-col h-fit'>
            <Header />
            <div className='pt-16 flex-grow'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default MainBody;
