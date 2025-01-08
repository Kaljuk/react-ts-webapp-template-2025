/* @description Sort types */
export type SortType = 'ascend' | 'descend' | undefined
/**
 * @description Pagination types
 */

/** @description Pagination configuration */
export type PaginationConfigurationState = {
  page: number
  limit: number
}

/** @description Pagination state */
export type PaginationState = PaginationConfigurationState & {
  total: number
}
