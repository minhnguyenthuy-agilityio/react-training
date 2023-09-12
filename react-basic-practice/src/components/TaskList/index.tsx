import { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Box, Heading, Flex, IconButton, HStack } from "@chakra-ui/react";

import { TaskCard } from "@/components";

import { TaskCardInformation } from "@/interfaces";

interface TaskListProps {
  name: string;
  tasks: TaskCardInformation[];
}

export const TaskList = ({ name, tasks }: TaskListProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = (shift: number) => {
    // Check if the ref is available
    if (ref.current) {
      // Increment or decrement the scroll position based on the shift value
      ref.current.scrollLeft += shift;

      // Check if scrolled to the end, then reset to the first item
      /* 
        scrollLeft: number of pixels that an element's content is scrolled horizontally to the left within its overflowed container. 
        offsetWidth: total width of an element, including its content, padding, and border. 
        scrollWidth: total width of an element's content, including the parts that are not currently visible due to overflow and need to be scrolled to.
      */
      if (
        ref.current.scrollLeft + ref.current.offsetWidth >=
        ref.current.scrollWidth
      ) {
        // Reset to the first item
        ref.current.scrollLeft = 1;
      } else if (ref.current.scrollLeft <= 0) {
        // Scroll to the last item
        ref.current.scrollLeft =
          ref.current.scrollWidth - ref.current.offsetWidth;
      }
    }
  };

  return (
    <Box width="100%" overflowX="hidden" mb={8} position="relative">
      <Flex justifyContent="space-between" mr={{ lg: 6 }} mb={2.5}>
        <Heading size="lg" textTransform="capitalize">
          {name}
        </Heading>

        <Flex alignItems="center">
          <IconButton
            icon={<GrPrevious />}
            aria-label="Prev List"
            size="md"
            variant="outline"
            cursor="pointer"
            onClick={() => handleScroll(-328)}
          >
            Prev
          </IconButton>

          <IconButton
            icon={<GrNext />}
            aria-label="Next List"
            size="md"
            cursor="pointer"
            variant="outline"
            onClick={() => handleScroll(328)}
          >
            Next
          </IconButton>
        </Flex>
      </Flex>

      <Box w="full">
        <HStack
          spacing={6}
          id="slider"
          overflowX="hidden"
          transition="0.5s transform 0.5s ease-in-out"
          scrollBehavior="smooth"
          ref={ref}
        >
          {tasks
            .filter((task) => task.timeLeft > 0)
            .map(
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
            )}
        </HStack>
      </Box>
    </Box>
  );
};
