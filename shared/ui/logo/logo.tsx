'use client'

import React from 'react';
import {Text} from "@nextui-org/react";

const Logo = () => {
  return (
    <Text span size={34} css={{
      textGradient: "45deg, $blue600 -10%, $yellow600 100%",
    }}
          weight="bold">MoviegO_ogle</Text>
  );
};

export default Logo;