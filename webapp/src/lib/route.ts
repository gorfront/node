const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllIteasRoute = () => "/";

export const viewRouteParams = getRouteParams({ ideasNick: true });
// eslint-disable-next-line no-redeclare
export type viewRouteParams = typeof viewRouteParams;
export const getViewIdeaRoute = ({ ideasNick }: viewRouteParams) => `/ideas/${ideasNick}`;

export const getNewIdeaRoute = () => "/ideas/new";
export const getSignUpRoute = () => "/sign-up";
export const getSignInRoute = () => "/sign-in";
