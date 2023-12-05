import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import { ButtonSize, buttonSize } from './buttonSize';
import { ColorVariant, Variant, colorVariantBy } from './colorVariantBy';

import { useTheme } from '@src/theme/ThemeProvider';

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && {
          alignSelf: 'initial'
        }),
        ...styleSheet
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary'
};

Button.Base = ButtonBase;
