export function itemMiddleware(md: any) {
  return function (next: any) {
    return function (action: any) {
      switch (action.type) {
        default:
          break;
      }
      return next(action);
    };
  };
}
