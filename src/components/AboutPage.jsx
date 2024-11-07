import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <>
            <h1>О нас</h1>
            <Link to='/'>Перейти на страницу Главная</Link>
        </>
    );
}

export default AboutPage;