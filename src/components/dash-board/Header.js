import kind from '@enact/core/kind';
import styles from './Header.module.css';
import Image from '@enact/agate/Image';

const Header = kind({
    name: 'Header',
    
    render: ()=>(
        <header className={styles.header}>
            <Image src="src/asset/ssu_logo.png" alt="Logo" className={styles.logo} />
        </header>
    )
});

export default Header;