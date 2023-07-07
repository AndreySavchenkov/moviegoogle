import React, {FC} from 'react';
import {User} from "@nextui-org/react";

type CustomUser = {
  src?: string;
  name: string;
  description?: string;
}

const CustomUser: FC<CustomUser> = ({src, name, description}) => {
  return (
    <User
      size='xl'
      src={src}
      name={name}
      description={description}
    />
  );
};

export default CustomUser;