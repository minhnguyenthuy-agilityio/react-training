import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useToast } from "@chakra-ui/react";

import { Task, Order, TaskCardInformation } from "@/interfaces";

import { addTask, deleteTask, getAllData, updateTask } from "@/services";

import { getTimeLeftTasks } from "@/helpers";

interface TasksContextData {
  tasks: TaskCardInformation[];
  setTasks: Dispatch<SetStateAction<TaskCardInformation[]>>;
  isLoading: boolean;
  handleSearchTask: (keyword: string) => void;
  handleSortTask: (order: Order) => void;
  handleAddTask: (data: Task) => void;
  handleEditTask: (data: Task, id: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const useTask = (): TasksContextData => useContext(TasksContext);

const TaskProvider = ({ children }: AuthProviderProps) => {
  const [tasks, setTasks] = useState<TaskCardInformation[]>([]);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);

      const tasks = await getAllData();

      if (tasks.error) {
        toast({
          title: tasks.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });

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

      const tasks = await getAllData(keyword);

      if (tasks.error) {
        toast({
          title: tasks.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        setTasks([]);
      }

      tasks.data && setTasks(getTimeLeftTasks(tasks.data));
      setIsLoading(false);
    };

    getDataByKeyword();
  };

  const handleSortTask = (order: Order): void => {
    const getDataBySort = async (): Promise<void> => {
      setIsLoading(true);

      const tasks = await getAllData("", order.field, order.direction);

      if (tasks.error) {
        toast({
          title: tasks.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        setTasks([]);
      }

      tasks.data && setTasks(getTimeLeftTasks(tasks.data));
      setIsLoading(false);
    };

    getDataBySort();
  };

  const handleAddTask = (data: Task): void => {
    const addNewTask = async (): Promise<void> => {
      setIsLoading(true);

      const addNewTask = await addTask(data);

      if (addNewTask.error) {
        toast({
          title: addNewTask.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      if (addNewTask.data) {
        const newDataAfterAdd = await getAllData();

        if (newDataAfterAdd.error) {
          toast({
            title: newDataAfterAdd.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setTasks([]);
        }

        if (newDataAfterAdd.data) {
          setTasks(getTimeLeftTasks(newDataAfterAdd.data));
          toast({
            title: "Added task successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      }

      setIsLoading(false);
    };

    addNewTask();
  };

  const handleEditTask = (data: Task, taskId: string): void => {
    const editTask = async (): Promise<void> => {
      setIsLoading(true);

      const updateEditTask = await updateTask(taskId, data);

      if (updateEditTask.error) {
        toast({
          title: updateEditTask.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const newDataAfterEdit = await getAllData();

        if (newDataAfterEdit.error) {
          toast({
            title: newDataAfterEdit.error,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setTasks([]);
        }

        if (newDataAfterEdit.data) {
          setTasks(getTimeLeftTasks(newDataAfterEdit.data));
          toast({
            title: "Edit task successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
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
        toast({
          title: deleteTaskSelected.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const newDataAfterDelete = await getAllData();

        if (newDataAfterDelete.error) {
          toast({
            title: deleteTaskSelected.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setTasks([]);
        }

        if (newDataAfterDelete.data) {
          setTasks(getTimeLeftTasks(newDataAfterDelete.data));
          toast({
            title: "Delete task successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      }

      setIsLoading(false);
    };

    removeTask();
  };

  const valueContext = {
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
