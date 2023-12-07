/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React from 'react';

import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';

import { useTheme } from '@src/theme/ThemeProvider';

interface FeedProps {
  children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px'
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
        paddingBottom: '24px'
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%'
          }}
          src="https://github.com/Raijoia.png"
          alt="Imagem de perfil do Raí Joia"
        />
        <Box
          styleSheet={{
            justifyContent: 'space-between'
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: 'space-between',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffee
            </Button>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: 'space-between',
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">
              Buy me a coffee
            </Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        Raí Joia
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '16px',
          marginTop: '16px'
        }}
      >
        <Link href="https://github.com/Raijoia" colorVariant="neutral">
          <Icon name="github" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/raijoia/"
          colorVariant="neutral"
        >
          <Icon name="linkedin" />
        </Link>
      </Box>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
