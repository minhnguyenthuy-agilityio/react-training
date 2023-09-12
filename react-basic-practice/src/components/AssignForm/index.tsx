import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { HiOutlineFolderOpen as FolderIcon } from "react-icons/hi";

interface AssignFormProps {
  taskName: string;
  category: string;
  studentName: string;
  studentClass: string;
  studentId: number;
  timeUpdate: string;
}

interface StudentInfo {
  label: string;
  value: string | number;
  transform?: "capitalize" | "uppercase" | null;
}

export const AssignForm = ({
  taskName,
  category,
  studentName,
  studentClass,
  studentId,
  timeUpdate,
}: AssignFormProps) => {
  const STUDENT_INFO: StudentInfo[] = [
    { label: "Student Name", value: studentName, transform: "capitalize" },
    { label: "Student Class", value: studentClass, transform: "uppercase" },
    { label: "Student Number", value: studentId },
  ];

  return (
    <FormControl
      ml={{ xl: 8 }}
      borderRadius={10}
      p={6}
      bgColor="light.100"
      // maxW={{ sm: "full", xl: "372px" }}
      // minW={{ sm: "full", xl: "0" }}
      maxW="372px"
      minW={{ sm: "full", xl: 0 }}
      h="fit-content"
    >
      <Heading as="h4" size="sm" mb={5}>
        Assigned Assignments
      </Heading>

      <Heading
        noOfLines={3}
        as="h2"
        size="lg"
        mb={3}
        textTransform="capitalize"
      >
        {taskName}
      </Heading>

      <Text color="secondary.400" size="sm" mb={6} textTransform="capitalize">
        {category}
      </Text>

      <Flex direction="column" gap={5}>
        <Heading as="h3" size="md">
          Detail Student
        </Heading>

        {STUDENT_INFO.map((info, index) => (
          <Flex key={index} justifyContent="space-between">
            <Text as="span" size="sm" color="secondary.400" fontWeight="medium">
              {info.label}
            </Text>
            <Text
              as="span"
              size="sm"
              fontWeight="semibold"
              textTransform={info.transform ?? "none"}
              whiteSpace="nowrap"
              overflowX="hidden"
              maxW="50%"
              textOverflow="ellipsis"
            >
              {info.value}
            </Text>
          </Flex>
        ))}

        <Heading as="h3" size="md">
          File Task
        </Heading>

        <Flex justifyContent="space-between">
          <Text as="span" size="sm" color="secondary.400" fontWeight="medium">
            Last Modified
          </Text>
          <Text as="span" size="sm" fontWeight="semibold">
            {timeUpdate}
          </Text>
        </Flex>

        <Text size="sm" color="secondary.400" fontWeight="medium">
          File submissions
        </Text>

        <InputGroup
          py={16}
          border="1px dashed"
          borderRadius="10"
          borderColor="primary.500"
          color="primary.500"
        >
          <Input type="file" display="none" />
          <InputRightElement top="40%" left="45%">
            <label htmlFor="file-input">
              <FolderIcon size="32px" />
            </label>
          </InputRightElement>
        </InputGroup>

        <Text size="sm" color="secondary.400">
          *drag or browser from device
        </Text>
      </Flex>

      <Button size="sm" type="submit" mt={8}>
        Submit
      </Button>
    </FormControl>
  );
};
