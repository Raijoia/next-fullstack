/* eslint-disable react/display-name */
import React from 'react';

import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';

interface FeedProps {
  children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Button>Olá pessoas!</Button>
      <Button.Base>
        <Image
          styleSheet={{ width: '128px', height: '128px', borderRadius: '100%' }}
          src="https://github.com/Raijoia.png"
          alt="Imagem de perfil do Raí Joia"
        />
      </Button.Base>
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Link href="https://github.com/Raijoia">
        <Icon name="github" />
      </Link>
      <Text>Feed Header</Text>
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
