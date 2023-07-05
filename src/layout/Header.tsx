import {Text} from '@rneui/base';
import React, {ReactElement} from 'react';
import {Header as HeaderRN} from '@rneui/themed';

const Header = (): ReactElement => {
  return (
    <HeaderRN>
      <Text>header</Text>
    </HeaderRN>
  );
};

export default Header;
