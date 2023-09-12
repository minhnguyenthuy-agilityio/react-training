import { Routes, Route } from "react-router-dom";

import {
  TaskPage,
  DetailTaskPage,
  MessagePage,
  OverviewPage,
  SettingsPage,
  MentorsPage,
} from "@/pages";

import { ROUTES } from "@/constants";

import { DefaultLayout } from "./layouts";

const Routing = () => (
  <DefaultLayout>
    <Routes>
      <Route path={ROUTES.TASK} element={<TaskPage />} />
      <Route path={ROUTES.TASK_DETAIL} element={<DetailTaskPage />} />
      <Route path={ROUTES.MESSAGE} element={<MessagePage />} />
      <Route path={ROUTES.OVERVIEW} element={<OverviewPage />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      <Route path={ROUTES.MENTORS} element={<MentorsPage />} />
    </Routes>
  </DefaultLayout>
);

export default Routing;
