import React from 'react';

import styled from 'styled-components';

import { parseStyleSheet } from '@skynexui/responsive_stylesheet';
import { StyleSheet } from '@src/theme/StyleSheet';

interface StyleBaseComponent {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyleBaseComponent>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};

BaseComponent.defaultProps = {
  styleSheet: {}
};
