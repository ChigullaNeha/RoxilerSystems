ModalCloseButton,
  useDisclosure,
  Button,
  Select,
  HStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { STATE } from "../Redux/action";
import { STATE, Totalsold, Totalunsold } from "../Redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const MonthModal = ({ items, handleSum }) => {
import SelectTag from "./SelectTag";
const MonthModal = () => {
  const dispatch = useDispatch();
  const stats = useSelector((items) => {
    return items.TransactionData.stats
    return items.TransactionData;
  }, shallowEqual);
console.log(stats,"stats")
  const MonthArray = [
    "January",
    "Febuarary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleChange(e) {
    onOpen();
    dispatch(STATE(e.target.value));
    dispatch(Totalsold(e.target.value));
    dispatch(Totalunsold(e.target.value));
  }
  console.log("i am stats", stats);
  return (
    <>
      <Select
        placeholder="Statistic"
        width="150px"
        cursor="pointer"
        onChange={handleChange}
      >
        {MonthArray.map((items, i) => {
          return (
            <option value={items} key={i}>
              {items}
            </option>
          );
        })}
      </Select>

      <SelectTag name="Statistic" fun={handleChange} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody><HStack spacing='24px'>
  <Box  h='40px' >
    Total sale
  </Box>
  <Box  h='40px' >
   {stats.length>0 && stats[0].total}
  </Box>

</HStack></ModalBody>
          <ModalBody>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total sale :{" "}
                </Box>
                <Box h="40px">
                  {stats.stats.length > 0 && stats.stats[0].total}
                </Box>
              </HStack>
            </Center>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total sold items :
                </Box>
                <Box h="40px">{stats.stats.length > 0 && stats.solditems}</Box>
              </HStack>
            </Center>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total unsold items :
                </Box>
                <Box h="40px">
                  {stats.stats.length > 0 && stats.unsolditems}
                </Box>
              </HStack>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
