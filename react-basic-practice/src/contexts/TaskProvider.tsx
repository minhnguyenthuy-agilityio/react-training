import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { TaskParam, Order, TaskCardInformation } from "@/interfaces";

import { addTask, deleteTask, getTaskList, updateTask } from "@/services";

import { getTimeLeftTasks } from "@/helpers";

import { useCustomToast } from "@/hook";

import { MESSAGES } from "@/constants";

interface TasksContextData {
  tasks: TaskCardInformation[];
  keyword: string;
  setTasks: Dispatch<SetStateAction<TaskCardInformation[]>>;
  isLoading: boolean;
  handleSearchTask: (keyword: string) => void;
  handleSortTask: (order: Order) => void;
  handleAddTask: (data: TaskParam) => void;
  handleEditTask: (data: TaskParam, id: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const useTask = (): TasksContextData => useContext(TasksContext);

const TaskProvider = ({ children }: AuthProviderProps) => {
  const [tasks, setTasks] = useState<TaskCardInformation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const callToast = useCustomToast();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      const tasks = await getTaskList();

      if (tasks.error) {
        callToast(tasks.error, "error");

        setTasks([]);
      }

      tasks.data && setTasks(getTimeLeftTasks(tasks.data));

      setIsLoading(false);
    };

    getData();
  }, []);

  const handleSearchTask = (keyword: string): void => {
    const getDataByKeyword = async (): Promise<void> => {
      setIsLoading(true);

      const tasks = await getTaskList(keyword);

      if (tasks.error) {
        callToast(tasks.error, "error");

        setTasks([]);
      }

      tasks.data && setTasks(getTimeLeftTasks(tasks.data));
      setKeyword(keyword);

      setIsLoading(false);
    };

    getDataByKeyword();
  };

  const handleSortTask = (order: Order): void => {
    const getDataBySort = async (): Promise<void> => {
      setIsLoading(true);

      const tasks = await getTaskList("", order.field, order.direction);

      if (tasks.error) {
        callToast(tasks.error, "error");

        setTasks([]);
      }

      tasks.data && setTasks(getTimeLeftTasks(tasks.data));
      setIsLoading(false);
    };

    getDataBySort();
  };

  const handleAddTask = (data: TaskParam): void => {
    const addNewTask = async (): Promise<void> => {
      setIsLoading(true);

      const addNewTask = await addTask(data);

      if (addNewTask.error) {
        callToast(addNewTask.error, "error");
      }

      if (addNewTask.data) {
        const newDataAfterAdd = await getTaskList();

        if (newDataAfterAdd.error) {
          callToast(newDataAfterAdd.error, "error");

          setTasks([]);
        }

        if (newDataAfterAdd.data) {
          callToast(MESSAGES.ADD_TASK_SUCCESS, "success");

          setTasks(getTimeLeftTasks(newDataAfterAdd.data));
        }
      }

      setIsLoading(false);
    };

    addNewTask();
  };

  const handleEditTask = (data: TaskParam, taskId: string): void => {
    const editTask = async (): Promise<void> => {
      setIsLoading(true);

      const updateEditTask = await updateTask(taskId, data);

      if (updateEditTask.error) {
        callToast(updateEditTask.error, "error");
      } else {
        const newDataAfterEdit = await getTaskList();

        if (newDataAfterEdit.error) {
          callToast(newDataAfterEdit.error, "error");

          setTasks([]);
        }

        if (newDataAfterEdit.data) {
          console.log("success");

          callToast(MESSAGES.EDIT_TASK_SUCCESS, "success");

          console.log("end");

          setTasks(getTimeLeftTasks(newDataAfterEdit.data));
        }
      }

      setIsLoading(false);
    };

    editTask();
  };

  const handleDeleteTask = (taskId: string): void => {
    const removeTask = async () => {
      setIsLoading(true);

      const deleteTaskSelected = await deleteTask(taskId);

      if (deleteTaskSelected.error) {
        callToast(deleteTaskSelected.error, "error");
      } else {
        const newDataAfterDelete = await getTaskList();

        if (newDataAfterDelete.error) {
          callToast(newDataAfterDelete.error, "error");

          setTasks([]);
        }

        if (newDataAfterDelete.data) {
          callToast(MESSAGES.DELETE_TASK_SUCCESS, "success");

          setTasks(getTimeLeftTasks(newDataAfterDelete.data));
        }
      }

      setIsLoading(false);
    };

    removeTask();
  };

  const valueContext = {
    keyword,
    tasks,
    isLoading,
    setTasks,
    handleSearchTask,
    handleSortTask,
    handleAddTask,
    handleEditTask,
    handleDeleteTask,
  };

  return (
    <TasksContext.Provider value={valueContext}>
      {children}
    </TasksContext.Provider>
  );
};

export { useTask, TaskProvider };
