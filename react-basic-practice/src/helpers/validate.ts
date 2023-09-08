import { Task } from "@/interfaces";

interface validateInputFormProps
  extends Omit<Task, "dueDateTime" | "progress"> {
  dueDate: string;
  dueTime: string;
}

const validateInputForm = (dataInput: validateInputFormProps) => {
  let fieldErrors = {
    name: false,
    description: false,
    category: false,
    studentInvolved: false,
    dueDate: false,
    dueTime: false,
    image: false,
  };

  for (const [key, value] of Object.entries(dataInput)) {
    fieldErrors = { ...fieldErrors, [key]: !value || value === "default" };
  }

  return {
    fieldErrors,
  };
};

export { validateInputForm };
