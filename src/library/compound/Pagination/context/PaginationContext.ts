import { createAccurateContext } from '@/library/utils/context/createAccurateContext';

export interface PaginationContextParams {
  array: (string | number)[];
  onChangePage: (value: string | number) => void;
  page: number;
}


export const PaginationContext = createAccurateContext<PaginationContextParams>()