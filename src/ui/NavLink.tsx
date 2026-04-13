'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
    title: string,
    href: string,
    onClick?:any
}

const NavLink = ({title, href}: Props) => {
    const path: string = usePathname();
    const isActive = path === href;

    return (
        <Link className={isActive ? 'border-b border-solid' : ''} href={href}>{title}</Link>
    );
};

export default NavLink;