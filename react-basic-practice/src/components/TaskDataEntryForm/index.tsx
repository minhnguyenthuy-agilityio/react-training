import { useState, ChangeEvent } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { CATEGORIES, OPTIONS } from "@/mock";

import { TaskParam, Task } from "@/interfaces";

import { validateInputForm } from "@/helpers";

import { useTask } from "@/contexts";

interface TaskDataEntryFormProps {
  isOpenForm: boolean;
  handleClose: () => void;
  defaultValues?: Task;
}

const currentDate = new Date().toISOString();

const valueResetState = {
  name: "",
  description: "",
  category: "default",
  studentInvolved: ["default"],
  dueDate: currentDate.slice(0, 10),
  dueTime: "00:00",
  image: "",
};

export const TaskDataEntryForm = ({
  isOpenForm,
  handleClose,
  defaultValues,
}: TaskDataEntryFormProps) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const { handleAddTask, handleEditTask } = useTask();
  const {
    id,
    name,
    description,
    category,
    studentInvolved,
    dueDateTime,
    image,
  } = defaultValues || {};
  const [formData, setFormData] = useState({
    name: name || "",
    description: description || "",
    category: category || "default",
    studentInvolved: studentInvolved || ["default"],
    dueDate: dueDateTime
      ? new Date(dueDateTime).toISOString().slice(0, 10)
      : currentDate.slice(0, 10),
    dueTime: dueDateTime
      ? new Date(dueDateTime).toISOString().slice(11, 16)
      : "00:00",
    image: image || "",
  });
  const titleForm = defaultValues ? "Edit Task" : "Create Task";

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));
  };

  const handleCreateTask = () => {
    const { fieldErrors } = validateInputForm(formData);

    setErrors(fieldErrors);

    const isFieldRequiredEmpty =
      fieldErrors.name || fieldErrors.image || fieldErrors.category;

    if (!isFieldRequiredEmpty) {
      const newTask: TaskParam = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        studentInvolved: [...formData.studentInvolved],
        image: formData.image,
        progress: 0,
        dueDateTime: new Date(
          `${formData.dueDate}T${formData.dueTime}:00.000Z`,
        ),
      };

      handleAddTask(newTask);
      handleClose();
      setFormData(valueResetState);
    }
  };

  const handleUpdateTask = () => {
    const { fieldErrors } = validateInputForm(formData);

    setErrors(fieldErrors);

    const isFieldRequiredEmpty = fieldErrors.name || fieldErrors.image;

    if (!isFieldRequiredEmpty && id) {
      const updateTask: TaskParam = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        studentInvolved: [...formData.studentInvolved],
        image: formData.image,
        progress: 0,
        dueDateTime: new Date(
          `${formData.dueDate}T${formData.dueTime}:00.000Z`,
        ),
      };

      handleEditTask(updateTask, id);
      handleClose();
    }
  };

  return (
    <Modal size="xl" isOpen={isOpenForm} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader p={10}>{titleForm}</ModalHeader>

        <ModalCloseButton />

        <ModalBody p={10}>
          <Stack spacing={6}>
            <FormControl isRequired isInvalid={errors.name}>
              <FormLabel>Task Name</FormLabel>
              <Input
                borderColor="light.300"
                value={formData.name}
                py={6}
                px={4}
                fontSize="sm"
                type="text"
                name="name"
                onChange={handleFieldChange}
              />
              <FormErrorMessage color="red">Name is required.</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                borderColor="light.300"
                value={formData.description}
                borderRadius="10px"
                fontSize="sm"
                name="description"
                placeholder="Here is a sample placeholder"
                onChange={handleFieldChange}
              />
            </FormControl>

            <FormControl isRequired isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Select
                borderColor="light.300"
                isRequired
                value={formData.category}
                name="category"
                fontWeight="base"
                size="sm"
                onChange={handleFieldChange}
              >
                <option value="default" hidden>
                  Category
                </option>

                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
              <FormErrorMessage color="red">
                Category is required.
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Students</FormLabel>
              <Select
                borderColor="light.300"
                value={formData.studentInvolved}
                fontWeight="base"
                size="lg"
                name="studentInvolved"
                onChange={handleFieldChange}
              >
                <option value="default" hidden>
                  Student
                </option>

                {OPTIONS.map(({ studentId, name }) => (
                  <option key={studentId} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Due date</FormLabel>
              <Flex gap={6}>
                <Input
                  borderColor="light.300"
                  name="dueDate"
                  value={formData.dueDate}
                  px={3}
                  type="date"
                  min={currentDate.slice(0, 10)}
                  onChange={handleFieldChange}
                />
                <Input
                  px={3}
                  borderColor="light.300"
                  name="dueTime"
                  value={formData.dueTime}
                  type="time"
                  onChange={handleFieldChange}
                />
              </Flex>
            </FormControl>

            <FormControl isRequired isInvalid={errors.image}>
              <FormLabel>Image</FormLabel>
              <Input
                borderColor="light.300"
                value={formData.image}
                py={6}
                px={4}
                fontSize="sm"
                type="text"
                name="image"
                onChange={handleFieldChange}
              />
              <FormErrorMessage color="red">
                Image is required.
              </FormErrorMessage>
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter p={10}>
          <Button
            type="submit"
            py={6}
            colorScheme="primary"
            onClick={defaultValues ? handleUpdateTask : handleCreateTask}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
