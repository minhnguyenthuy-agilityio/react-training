import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FiUsers as UsersIcon } from "react-icons/fi";
import { BiTimeFive as TimeIcon } from "react-icons/bi";
import { renderTimeLeft } from "@/helpers";

interface TaskInformationProps {
  name: string;
  category: string;
  image: string;
  timeLeft: number;
  description: string;
  studentsInvolved: string[];
  assessments: string[];
}

export const TaskInformation = ({
  name,
  category,
  image,
  timeLeft,
  studentsInvolved,
  description,
  assessments,
}: TaskInformationProps) => (
  <Container px={0} mb={6} borderRadius={10} bgColor="light.100" maxW="720px">
    <Image
      alt="background cover"
      src={image}
      h={{ sm: "208px", md: "340px", lg: "360px" }}
    />
    <Box p={6}>
      <Heading as="h2" size="xl">
        {name}
      </Heading>

      <Flex gap={4} py="30px" alignItems="center">
        <Text size="sm" as="span" color="secondary.400">
          {category}
        </Text>
        <Divider
          orientation="vertical"
          height="28px"
          width="1px"
          bgColor="gray"
          border="none"
        />
        <Button
          size="sm"
          bgColor="light.100"
          color="blue"
          variant="outline"
          border="none"
        >
          + Get Mentors
        </Button>
      </Flex>

      <Flex>
        <Flex mr={5} gap={1} alignItems="center">
          <UsersIcon color="secondary.400" />
          <Text as="span" size="sm" fontWeight="medium">
            {studentsInvolved.length} Students Involved
          </Text>
        </Flex>

        <Flex gap={1} alignItems="center">
          <TimeIcon color="secondary.400" />
          <Text as="span" size="sm" fontWeight="medium">
            {renderTimeLeft(timeLeft)}
          </Text>
        </Flex>
      </Flex>

      <Heading as="h3" size="lg" my={4}>
        Description
      </Heading>
      <Text size="sm" mb="30px">
        {description}
      </Text>

      <Stack spacing={5}>
        <Heading as="h3" size="lg">
          Essence of Assessment
        </Heading>
        {assessments.map((assessment) => (
          <Checkbox key={assessment} size="sm">
            {assessment}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  </Container>
);
