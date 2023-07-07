import React from 'react';
import {useClasses} from './use-classes';
import Logo from "@shared/ui/logo/logo";
import Navigation from "@app/components/header/components/navigation/navigation";

const Header = () => {
  const {cnRoot, cnContainer} = useClasses();

  return (
    <header className={cnRoot}>
      <div className={cnContainer}>
        <Logo/>
        <Navigation/>
      </div>
    </header>
  );
};

export default Header;
