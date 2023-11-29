import kind from '@enact/core/kind';
import styles from './Header.module.css';

const Header = kind({
    name: 'Header',
    
    render: ()=>(
        <header className={styles.header}>
            <img src="../src/asset/ssu_logo.png" alt="Logo" className={styles.logo} />
        </header>
    )
});

export default Header;