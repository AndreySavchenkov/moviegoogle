'use client';

import React, {FC} from 'react';
import {Pagination} from "@nextui-org/react";

type CustomPaginationProps = {
  total: number,
  initialPage: number,
  page: number,
  onChange: (page: number) => void,
}

const CustomPagination: FC<CustomPaginationProps> = ({total, initialPage, page, onChange}) => {
  return (
    <Pagination total={total} initialPage={initialPage} page={page} onChange={onChange} />
  );
};

export default CustomPagination;