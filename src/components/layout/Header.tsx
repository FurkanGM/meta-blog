import React from 'react';
import Link from "next/link";
import style from './header.module.scss'
import SearchBar from "@/components/common/SearchBar";
import Logo from "@/components/common/Logo";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

const Header = () => {
    const menuItems = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Blog",
            link: "/blog"
        },
    ]

    return (
        <div className="container">
            <div className={style.header}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className={style.menu}>
                    {menuItems && menuItems.map((menuItem, key) => (
                        <div className={style.menu__item} key={menuItem.text}>
                            <Link href={menuItem.link}>
                                {menuItem.text}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center">
                    <SearchBar/>
                    <div className="ml-10">
                        <ThemeSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
