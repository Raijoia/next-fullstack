/* eslint-disable react/display-name */
import React from 'react';

import Box from '@src/components/Box/Box';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
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
      <Image
        styleSheet={{ width: '128px', height: '128px', borderRadius: '100%' }}
        src="https://github.com/Raijoia.png"
        alt="Imagem de perfil do Raí Joia"
      />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
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
