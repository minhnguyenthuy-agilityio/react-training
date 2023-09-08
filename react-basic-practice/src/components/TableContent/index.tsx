import { Box, Spinner } from "@chakra-ui/react";

import { SearchList, TaskList } from "@/components";

import { useTask } from "@/contexts";

import { TaskCardInformation } from "@/interfaces";

interface TableContentProps {
  keyword: string;
}

export const TableContent = ({ keyword }: TableContentProps) => {
  const { isLoading, tasks } = useTask();

  const renderTaskList = () => {
    const withinOneDay: TaskCardInformation[] = [];
    const moreThanOneDay: TaskCardInformation[] = [];

    for (const task of tasks) {
      if (task.timeLeft < 24) {
        withinOneDay.push(task);
      } else {
        moreThanOneDay.push(task);
      }
    }

    return (
      <>
        {isLoading ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Spinner />
          </Box>
        ) : (
          <>
            {keyword ? (
              <SearchList listSearch={tasks} />
            ) : (
              <Box>
                <TaskList name="time limit" tasks={withinOneDay} />
                <TaskList name="new task" tasks={moreThanOneDay} />
              </Box>
            )}
          </>
        )}
      </>
    );
  };

  return <>{renderTaskList()}</>;
};
