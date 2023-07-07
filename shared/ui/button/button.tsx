import React, {FC} from 'react';
import {Button, NormalColors} from "@nextui-org/react";

type CustomButtonProps = {
  color?: NormalColors;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const CustomButton: FC<CustomButtonProps> = ({color,children, onClick}) => {
  return (
    <Button onClick={onClick} color={color}>{children}</Button>
  )
};

export default CustomButton;