import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  Select,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Button,
  Hide,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { BsFilter as FilterIcon } from "react-icons/bs";
import { BiCategoryAlt as CategoryIcon } from "react-icons/bi";
import { LuSettings2 as SettingsIcon } from "react-icons/lu";

import { OptionValue } from "@/constants";

import { useTask } from "@/contexts";

import { CATEGORIES } from "@/mock";

import { DirectionOrder, FieldOrder } from "@/interfaces";

import { TaskDataEntryForm } from "@/components";

interface TableHeaderProps {
  onSearch: (value: string) => void;
}

const SORT_OPTION = [
  { value: OptionValue.NameAsc, label: "Sort by: name (asc)" },
  { value: OptionValue.NameDesc, label: "Sort by: name (desc)" },
  { value: OptionValue.TimeAsc, label: "Sort by: deadline (asc)" },
  { value: OptionValue.TimeDesc, label: "Sort by: deadline (desc)" },
];

const sortValue: {
  [key in OptionValue]: { field: FieldOrder; direction: DirectionOrder };
} = {
  [OptionValue.NameAsc]: {
    field: "name",
    direction: "asc",
  },
  [OptionValue.NameDesc]: {
    field: "name",
    direction: "desc",
  },
  [OptionValue.TimeAsc]: {
    field: "dueDateTime",
    direction: "asc",
  },
  [OptionValue.TimeDesc]: {
    field: "dueDateTime",
    direction: "desc",
  },
};

export const TableHeader = ({ onSearch }: TableHeaderProps) => {
  const { handleSortTask, handleSearchTask } = useTask();
  const [keyValue, setKeyValue] = useState("");
  const {
    isOpen: isOpenForm,
    onClose: onCloseForm,
    onOpen: onOpenForm,
  } = useDisclosure();

  const optionValueMapping: { [key: string]: OptionValue } = {
    name_asc: OptionValue.NameAsc,
    name_desc: OptionValue.NameDesc,
    time_asc: OptionValue.TimeAsc,
    time_desc: OptionValue.TimeDesc,
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSortTask(sortValue[optionValueMapping[e.target.value]]);
  };

  const handleOnChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setKeyValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(keyValue);
      handleSearchTask(keyValue);
    }
  };

  const handleBlur = () => {
    onSearch(keyValue);
    handleSearchTask(keyValue);
  };

  return (
    <Flex
      bgColor="light.100"
      p={{ sm: 4, md: 8 }}
      pt={{ sm: 4, md: 3 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <TaskDataEntryForm handleClose={onCloseForm} isOpenForm={isOpenForm} />

      <InputGroup alignContent="center" h="52px" maxW="480px">
        <Input
          h="full"
          borderColor="light.300"
          size="xs"
          placeholder="Search Task"
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />

        <InputRightElement color="secondary.300" fontSize="md" top="20%">
          <SearchIcon />
        </InputRightElement>
      </InputGroup>

      <Show above="lg">
        <Flex ml={6} gap={6} alignItems="center">
          <IconButton
            onClick={onOpenForm}
            isRound={true}
            variant="solid"
            colorScheme="primary"
            aria-label="add task"
            fontSize="20px"
            icon={<AddIcon />}
          />

          <Select
            size={{ lg: "xs", xl: "md" }}
            icon={<CategoryIcon />}
            defaultValue="default"
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

          <Select
            size={{ lg: "xs", xl: "base" }}
            icon={<FilterIcon />}
            defaultValue="default"
            onChange={handleSort}
          >
            <option value="default" hidden>
              Sort by
            </option>

            {SORT_OPTION.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Flex>
      </Show>

      <Hide above="lg">
        <Menu>
          <MenuButton
            size="lg"
            as={Button}
            w="52px"
            h="52px"
            ml={6}
            variant="outline"
          >
            <SettingsIcon />
          </MenuButton>

          <MenuList>
            <MenuGroup title="Category">
              {CATEGORIES.map((category) => (
                <MenuItem key={category}>{category}</MenuItem>
              ))}
            </MenuGroup>

            <MenuDivider />

            <MenuGroup title="Sort by">
              {SORT_OPTION.map(({ value, label }) => (
                <MenuItem key={value}>{label}</MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </Hide>
    </Flex>
  );
};
