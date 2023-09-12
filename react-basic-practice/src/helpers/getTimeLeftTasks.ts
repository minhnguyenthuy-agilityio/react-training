import { Task } from "@/interfaces";

export const getTimeLeftTask = (task: Task) => {
  const currentDate = new Date();
  const duaDateTime = new Date(task.dueDateTime);

  // Calculate the time difference between dueDateTime and currentDate
  const timeLeft = Math.max(0, duaDateTime.getTime() - currentDate.getTime());

  // Convert the time difference to hours
  const hoursLeft = timeLeft / (1000 * 60 * 60); // 1000 ms * 60 s * 60 min

  return {
    ...task,
    timeLeft: Math.round(hoursLeft),
  };
};

export const getTimeLeftTasks = (tasks: Task[]) => {
  const tasksWithTimeLeft = tasks.map((task) => {
    return getTimeLeftTask(task);
  });

  return tasksWithTimeLeft;
};
