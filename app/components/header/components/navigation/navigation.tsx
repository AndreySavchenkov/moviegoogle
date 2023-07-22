'use client'

import React from 'react';
import {RoutesEnum} from "@shared/constants/routes";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useClasses} from './use-classes';

const links = [
  {name: 'Рандомный фильм', href: RoutesEnum.MAIN},
  {name: 'Поиск фильмов', href: RoutesEnum.FIlMS},
];

const Navigation = () => {
  const {cnRoot, cnLink} = useClasses();
  const pathname = usePathname()

  return (
    <nav className={cnRoot}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={cnLink(isActive)}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>)
      })}
    </nav>
  );
};

export default Navigation;