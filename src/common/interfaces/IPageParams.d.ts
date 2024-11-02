export interface IPageParams<TParams = { [key: string]: string }, TSearchParams = { [key: string]: string }> {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
}
export interface IClientPageParams<TParams = { [key: string]: string }, TSearchParams = { [key: string]: string }> {
  params: TParams;
  searchParams: TSearchParams;
}
