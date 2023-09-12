import { API_PATH_URL, MESSAGES } from "@/constants";
import { axiosInstance } from "./configInstance";

import { TaskParam, Task, FieldOrder, DirectionOrder } from "@/interfaces";

/**
 * Fetch api tasks
 * @param keyword - Key search task
 * @param sortBy - Sort list by field
 * @param order - Sort list ascending or descending
 *
 * @returns {Promise<{ data: GetTask[] | null; error: string }>} - Task array and error message
 */
export const getTaskList = async (
  keyword?: string,
  sortBy?: FieldOrder,
  order?: DirectionOrder,
): Promise<{ data: Task[] | null; error: string }> => {
  try {
    const res = await axiosInstance.get<Task[]>(API_PATH_URL.TASKS_URL, {
      params: {
        name: keyword,
        sortBy: sortBy,
        order: order,
      },
    });

    return {
      data: res.data || [],
      error: "",
    };
  } catch (error) {
    return {
      data: null,
      error: MESSAGES.FETCH_API_FAIL,
    };
  }
};

/**
 * Get data of task by taskId
 * @param {string} id - id of task
 *
 * @returns {Promise<{ data: GetTask | null; error: string }>} - Task object and error message
 */
export const getTaskById = async (
  id: string,
): Promise<{ data: Task | null; error: string }> => {
  try {
    const res = await axiosInstance.get<Task>(
      `${API_PATH_URL.TASKS_URL}/${id}`,
    );

    return {
      data: res.data || [],
      error: "",
    };
  } catch (error) {
    return {
      data: null,
      error: MESSAGES.FETCH_API_FAIL,
    };
  }
};

/**
 * Add new task
 * @param {taskId}  - Task's information
 *
 * @returns {Promise<{ data: Task | null; error: string }>} - Task object and error message
 */
export const addTask = async (
  data: TaskParam,
): Promise<{ data: TaskParam | null; error: string }> => {
  try {
    const res = await axiosInstance.post<TaskParam>(
      API_PATH_URL.TASKS_URL,
      data,
    );

    return {
      data: res.data || [],
      error: "",
    };
  } catch (error) {
    return {
      data: null,
      error: MESSAGES.DELETE_FAIL,
    };
  }
};

/**
 * Delete task
 * @param {string} id - id of task
 *
 * @returns {Promise<{ data: Task | null; error: string }>} - Task object and error message
 */
export const deleteTask = async (
  taskId: string,
): Promise<{ data: TaskParam | null; error: string }> => {
  try {
    const res = await axiosInstance.delete<TaskParam>(
      `${API_PATH_URL.TASKS_URL}/${taskId}`,
    );

    return {
      data: res.data || [],
      error: "",
    };
  } catch (error) {
    return {
      data: null,
      error: MESSAGES.DELETE_FAIL,
    };
  }
};

/**
 * Update task
 * @param {number} taskId - Id of task
 * @param {object} data - Data of task
 *
 * @returns {Promise<{ data: Task | null; error: string }>} - Task object and error message
 */
export const updateTask = async (
  taskId: string,
  data: TaskParam,
): Promise<{ data: TaskParam | null; error: string }> => {
  try {
    const res = await axiosInstance.put<TaskParam>(
      `${API_PATH_URL.TASKS_URL}/${taskId}`,
      data,
    );

    return {
      data: res.data || [],
      error: "",
    };
  } catch (error) {
    return {
      data: null,
      error: MESSAGES.DELETE_FAIL,
    };
  }
};
