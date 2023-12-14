/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React from 'react';

import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';

import { FeedPost } from './patterns/FeedPost';

import type { Post } from '@src/services/posts/PostsService';
import { useConfig } from '@src/services/template/ConfigContext';
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
        paddingTop: '40px',
        paddingHorizontal: '32px'
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  const config = useConfig();

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
          src={config?.personal?.avatar}
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
        {config?.personal?.name}
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '4px'
        }}
      >
        {Object.keys(config.personal.socialNetworks).map((key) => {
          const socialNetwork = config.personal.socialNetworks[key];
          if (socialNetwork) {
            return (
              <Link
                key={key}
                target="_blank"
                href={config.personal.socialNetworks[key]}
              >
                <Icon name={key as any} />
              </Link>
            );
          }
          return null;
        })}
      </Box>
    </Box>
  );
};

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box>
      <Text variant="heading3" styleSheet={{ marginBottom: '24px' }}>
        Últimas Atualizações
      </Text>
      {posts.map(({ title, slug, metadata, image, alt }) => {
        const { date, excerpt, tags, url } = metadata;
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
            image={image}
            alt={alt}
          />
        );
      })}
    </Box>
  );
};
