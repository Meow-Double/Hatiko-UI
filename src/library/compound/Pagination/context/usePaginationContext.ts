import { useAccurateContext } from "@/library/utils/context/useAccurateContext";

import { PaginationContext } from "./PaginationContext";

export const usePaginationContext = () => useAccurateContext(PaginationContext)