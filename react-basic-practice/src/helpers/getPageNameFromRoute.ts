import { PAGE_NAME, ROUTES } from "@/constants";

export const getPageNameFromRoute = (route: string) => {
  const routeToPageNameMap = {
    [ROUTES.OVERVIEW]: PAGE_NAME.OVERVIEW,
    [ROUTES.TASK]: PAGE_NAME.TASK,
    [ROUTES.TASK_DETAIL]: PAGE_NAME.TASK_DETAIL,
    [ROUTES.MENTORS]: PAGE_NAME.MENTORS,
    [ROUTES.MESSAGE]: PAGE_NAME.MESSAGE,
    [ROUTES.SETTINGS]: PAGE_NAME.SETTINGS,
  };

  return routeToPageNameMap[route];
};
