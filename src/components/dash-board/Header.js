import kind from '@enact/core/kind';
import styles from './Header.module.css';
import ssu_logo from '../../asset/ssu_logo.png';

const Header = kind({
    name: 'Header',
    
    render: ()=>(
        <header className={styles.header}>
            <img src={ssu_logo} alt="Logo" className={styles.logo} />
        </header>
    )
});

export default Header;