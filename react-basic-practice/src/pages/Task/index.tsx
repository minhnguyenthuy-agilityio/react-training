import { Table } from "@/components";

import { TaskProvider } from "@/contexts";

export const TaskPage = () => {
  return (
    <TaskProvider>
      <Table />
    </TaskProvider>
  );
};
