/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import React from 'react';
import { useRipple } from 'react-use-ripple';

import styled from 'styled-components';

import Text from '../Text/Text';

import { StyleSheet } from '@src/theme/StyleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';

const StyledButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ButtonBase({
  textVariant,
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255, 255, 255, 0.7)'
  });
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      {...props}
      styleSheet={{
        border: '0',
        backgroundColor: 'transparent',
        color: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
    >
      {children}
    </StyledButton>
  );
}
