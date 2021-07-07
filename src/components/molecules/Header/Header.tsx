import React, { useState } from 'react';
import { Anchor } from '@atoms/Anchor/Anchor';
import { Turn } from 'hamburger-react';
import Link from 'next/link';
import * as S from './Header.styled';

/**
 * Header Molecule
 */
export function Header(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.HeaderContainer data-testid='header'>
      <Link href='/' passHref>
        <S.LogoContainer>
          <S.Logo src='/logo.png' alt='FooCar Logo' />
        </S.LogoContainer>
      </Link>
      <S.HamburgerContainer onClick={() => setOpen(!isOpen)} data-testid='header-hamburger'>
        <Turn size={24} toggled={isOpen} />
      </S.HamburgerContainer>
      <S.Menu isOpen={isOpen}>
        <S.MenuLink>
          <Anchor href='#privacy'>Datenschutz</Anchor>
        </S.MenuLink>
        <S.MenuLink>
          <Anchor href='#imprint'>Impressum</Anchor>
        </S.MenuLink>
      </S.Menu>
    </S.HeaderContainer>
  );
}
