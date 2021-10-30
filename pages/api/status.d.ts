export type APIResponse<T> = {
  data: T;
};

export type ErrorResponse<T = undefined> = {
  reason: string;
  data?: T;
};
