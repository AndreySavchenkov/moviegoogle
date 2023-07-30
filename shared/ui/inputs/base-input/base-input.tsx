'use client'

import React, {ChangeEvent, FC} from 'react';
import {Input} from "@nextui-org/react";

type BaseInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: string | ChangeEvent<Element>) => void;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}

const BaseInput:FC<BaseInputProps> = ({value, onChange, placeholder, type, max,min, step}) => {
  return <Input labelPlaceholder={placeholder} value={value} onChange={onChange} status="primary" fullWidth type={type} max={max} min={min} step={step}  />;
};

export default BaseInput;