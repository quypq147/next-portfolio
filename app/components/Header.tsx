import Nav from './Navbar';
import NextLogo from '../../public/nextjs-uwu-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="w-full items-center py-3 px-10 justify-between flex">
            <Link href={"/"}>
                <Image src={NextLogo} alt="Next.js Logo" width={64} height={64}/>
            </Link>
            <Nav />
        </header>
    )
}