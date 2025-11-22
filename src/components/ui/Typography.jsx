import styled from '@emotion/styled';

export const Heading = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors['text-primary']};
  transition: color 0.3s ease;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.color || props.theme.colors['text-primary']};
  font-size: ${(props) => props.fontSize};
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
