import { Flex, Text } from "@chakra-ui/react";

import { TaskCard } from "@/components";

import { TaskCardInformation } from "@/interfaces";

interface SearchListProps {
  listSearch: TaskCardInformation[];
}

export const SearchList = ({ listSearch }: SearchListProps) => (
  <Flex h="full" p={5} gap={4} wrap="wrap">
    {listSearch.length ? (
      listSearch.map(
        ({
          id,
          name,
          category,
          image,
          studentInvolved,
          timeLeft,
          progress,
          description,
          dueDateTime,
        }) => (
          <TaskCard
            id={id}
            key={id}
            name={name}
            description={description}
            category={category}
            image={image}
            studentInvolved={studentInvolved}
            timeLeft={timeLeft}
            progress={progress}
            dueDateTime={dueDateTime}
          />
        ),
      )
    ) : (
      <Text mx="auto">No results found</Text>
    )}
  </Flex>
);
