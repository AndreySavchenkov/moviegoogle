'use client'

import React, {ChangeEvent, FC} from 'react';
import {Input} from "@nextui-org/react";

type BaseInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: string | ChangeEvent<Element>) => void;
}

const BaseInput:FC<BaseInputProps> = ({value, onChange, placeholder}) => {
  return <Input labelPlaceholder={placeholder} value={value} onChange={onChange} status="primary" fullWidth  />;
};

export default BaseInput;