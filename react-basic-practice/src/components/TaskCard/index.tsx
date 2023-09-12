import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiTimeFive as TimeIcon } from "react-icons/bi";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { SliderGroup, TaskDataEntryForm } from "@/components";

import { ROUTES } from "@/constants";

import { renderTimeLeft } from "@/helpers";

import { useTask } from "@/contexts";

import { Task, TaskCardInformation } from "@/interfaces";

export const TaskCard = ({
  id,
  name,
  category,
  image,
  timeLeft,
  progress,
  studentInvolved,
  description,
  dueDateTime,
}: TaskCardInformation) => {
  const {
    isOpen: isOpenForm,
    onClose: onCloseForm,
    onOpen: onOpenForm,
  } = useDisclosure();

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const onOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const onClosePopup = () => {
    setIsOpenPopup(false);
  };

  const { handleDeleteTask } = useTask();

  const onDeleteTask = () => {
    handleDeleteTask(id);
  };

  const defaultValues: Task = {
    id,
    name,
    category,
    image,
    progress,
    studentInvolved,
    description,
    dueDateTime,
  };

  return (
    <Box
      backgroundColor="light.100"
      p={6}
      w="328px"
      h="314px"
      position="relative"
      _hover={{
        ".edit-delete-buttons": {
          display: "flex",
        },
      }}
    >
      <Flex
        gap={2}
        position="absolute"
        top={2}
        right={2}
        className="edit-delete-buttons"
        display="none"
      >
        <IconButton
          w="fit-content"
          onClick={onOpenForm}
          isRound={true}
          variant="solid"
          colorScheme="primary"
          aria-label="add task"
          fontSize="20px"
          icon={<EditIcon />}
        />

        <IconButton
          w="fit-content"
          onClick={onOpenPopup}
          isRound={true}
          variant="solid"
          colorScheme="primary"
          aria-label="add task"
          fontSize="20px"
          icon={<DeleteIcon />}
        />
      </Flex>

      <Modal isOpen={isOpenPopup} onClose={onClosePopup}>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Are you sure ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody my={6}>
            <Text>
              Do you really want to delete these task ? This process cannot be
              undone
            </Text>
          </ModalBody>

          <ModalFooter gap={3}>
            <Button
              p={6}
              bg="gray"
              colorScheme="secondary"
              onClick={onClosePopup}
            >
              Cancel
            </Button>
            <Button p={6} colorScheme="error" onClick={onDeleteTask}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TaskDataEntryForm
        handleClose={onCloseForm}
        isOpenForm={isOpenForm}
        defaultValues={defaultValues}
      />

      <Link to={`${ROUTES.TASK}${id}`}>
        <Image
          maxW="none"
          w="280px"
          h="110px"
          alt="background task"
          mb={5}
          borderRadius="10"
          src={image}
        />

        <Heading
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflowX="hidden"
          mb={1}
          textTransform="capitalize"
        >
          {name}
        </Heading>

        <Text
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflowX="hidden"
          mb={4}
          color="secondary.400"
          size="xs"
          textTransform="capitalize"
        >
          {category}
        </Text>

        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Progress</Text>
          <Text fontWeight="medium" color="primary.500">
            {progress} %
          </Text>
        </Flex>

        <SliderGroup progressPercent={progress} />

        <Flex mt={2} justifyContent="space-between">
          <Flex alignItems="center">
            <Icon as={TimeIcon} boxSize={6} />
            <Text fontWeight="medium" ml={2}>
              {renderTimeLeft(timeLeft)}
            </Text>
          </Flex>

          <Box>
            <AvatarGroup
              flexDirection="row"
              spacing="-0.5rem"
              size="xs"
              max={5}
            >
              {studentInvolved.map((member) => (
                <Avatar key={member} name={member} bgColor="punk" />
              ))}
            </AvatarGroup>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};
