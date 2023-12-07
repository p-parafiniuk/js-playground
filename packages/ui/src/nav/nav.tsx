
import Link from 'next/link';

interface NavItem {
    path: string;
    label: string;
}

export interface NavProps {
    links: NavItem[];
}

// function Nav({ links }): )
// Unhandled Runtime Error
// Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
// Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor


const Nav: React.FC<NavProps> = ({ links }) => {
    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.path}>
                        <Link href={link.path}>
                            {link.label}
                            {/* <a>{link.label}</a> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
