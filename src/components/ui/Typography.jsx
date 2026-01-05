import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useDiagonalBreakpointValue } from '../../hooks/useScreenSize';

const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.theme.colors['text-primary']};
  transition: color 0.3s ease;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledText = styled.p`
  color: ${(props) => props.color || props.theme.colors['text-primary']};
  font-size: ${(props) => props.fontSize || 'inherit'};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  transition: color 0.3s ease;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.brand.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const mapThemeToBreakpointValues = (themeValues) => ({
  base: themeValues.sm,
  sm: themeValues.sm,
  md: themeValues.md,
  lg: themeValues.lg,
  xl: themeValues.xl,
  '2xl': themeValues.xl
});

export const Heading = ({ variant = 'header', fontSize, children, ...props }) => {
  const theme = useTheme();
  const typographySizes = theme.sizes?.typography?.[variant];
  
  const responsiveSize = useDiagonalBreakpointValue(
    typographySizes ? mapThemeToBreakpointValues(typographySizes) : {}
  );

  let finalFontSize = fontSize;
  if (typeof fontSize === 'number') {
    finalFontSize = `${fontSize}px`;
  } else if (!fontSize && responsiveSize) {
    finalFontSize = `${responsiveSize}px`;
  }

  return (
    <StyledHeading fontSize={finalFontSize} {...props}>
      {children}
    </StyledHeading>
  );
};

export const Text = ({ variant = 'text', fontSize, children, ...props }) => {
  const theme = useTheme();
  const typographySizes = theme.sizes?.typography?.[variant];
  
  const responsiveSize = useDiagonalBreakpointValue(
    typographySizes ? mapThemeToBreakpointValues(typographySizes) : {}
  );

  let finalFontSize = fontSize;
  if (typeof fontSize === 'number') {
    finalFontSize = `${fontSize}px`;
  } else if (!fontSize && responsiveSize) {
    finalFontSize = `${responsiveSize}px`;
  }

  return (
    <StyledText fontSize={finalFontSize} {...props}>
      {children}
    </StyledText>
  );
};
