export interface ISearchQuery {
  type: string;
  query: {
    key: string,
    value: string
  };
  data?: object;
}
