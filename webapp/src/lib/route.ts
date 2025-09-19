const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllIteasRoute = () => "/";

export const viewRouteParams = getRouteParams({ ideasNick: true });
export type viewRouteParams = typeof viewRouteParams;
export const getViewIdeRoute = ({ ideasNick }: viewRouteParams) => `/ideas/${ideasNick}`;
