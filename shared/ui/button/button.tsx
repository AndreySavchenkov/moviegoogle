import React, {FC} from 'react';
import {Button, NormalColors} from "@nextui-org/react";

type CustomButtonProps = {
  color?: NormalColors;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'reset' | 'submit';
}

const CustomButton: FC<CustomButtonProps> = ({type, color, children, onClick}) => {
  return (
    <Button onClick={onClick} color={color} type={type}>{children}</Button>
  )
};

export default CustomButton;