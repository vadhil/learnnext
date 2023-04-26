import Link from "next/link";
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return <div className={styles.navbar}>
    <Link href="/">home</Link>
    <Link href="/profile">profile</Link>
    <Link href="/about">about</Link>
    <Link href="/coins">Coins</Link>
    </div>
}

export default Navbar;