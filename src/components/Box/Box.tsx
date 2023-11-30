import React from 'react';

import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Box({ children, styleSheet, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
