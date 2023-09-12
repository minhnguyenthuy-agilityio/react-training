import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, AlertIcon, Box, Spinner, Flex } from "@chakra-ui/react";

import { TaskInformation, AssignForm } from "@/components";

import { ASSIGNFORM_VALUES, ASSESSMENTS } from "@/mock";

import { getTaskById } from "@/services";

import { TaskCardInformation } from "@/interfaces";

import { getTimeLeftTask } from "@/helpers";

export const DetailTaskPage = () => {
  const {
    taskName,
    category,
    studentName,
    studentClass,
    studentId,
    timeUpdate,
  } = ASSIGNFORM_VALUES;
  const { taskId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<TaskCardInformation>();
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      if (!taskId) return;

      const task = await getTaskById(taskId);

      task.error && setError(task.error);
      task.data && setTask(getTimeLeftTask(task.data));

      setIsLoading(false);
    };

    getData();
  }, [taskId]);

  return (
    <Box
      m="auto"
      maxW="1188px"
      p={{ sm: 6, lg: 8 }}
      display={{ xl: "flex" }}
      justifyContent="center"
    >
      {isLoading && (
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Spinner />
        </Flex>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {task && (
        <TaskInformation
          name={task.name}
          category={task.category}
          image={task.image}
          timeLeft={task.timeLeft}
          studentsInvolved={task.studentInvolved}
          description={task.description}
          assessments={ASSESSMENTS}
        />
      )}

      <AssignForm
        taskName={taskName}
        category={category}
        studentName={studentName}
        studentClass={studentClass}
        studentId={studentId}
        timeUpdate={timeUpdate}
      />
    </Box>
  );
};
