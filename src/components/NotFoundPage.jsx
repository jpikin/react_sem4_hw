import '../notFoundPage.css'
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
            <Link
                to='/'
                className="goTo"
            >На главную</Link>
            <h1 className='h1'>
                404
                <span aria-hidden="true">404</span>
            </h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>


        </>
    );
}

export default NotFoundPage;