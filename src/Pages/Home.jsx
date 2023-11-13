import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import TransactionTable from "../Components/TransactionTable";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import { AllData, Searching_Data } from "../Redux/action";
import { Accoding_Month, AllData, Searching_Data } from "../Redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Statistick from "../Components/Statistick";
import { Link } from "react-router-dom";
import MonthModal from "../Components/MonthModal";
import SelectTag from "../Components/SelectTag";
const Home = () => {
  const [search, setSearch] = useState("");
  const { Transactions } = useSelector(
@@ -16,47 +17,27 @@ const Home = () => {
    }),
    shallowEqual
  );
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [stats, setStats] = useState([]);
  const limit = useRef(10);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search === "") {
      dispatch(AllData(page, limit.current));
dispatch(AllData(page, limit.current));
    } else {
      dispatch(Searching_Data(search));
    }
  }, [search]);

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
  }, [search,page]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTimeout(() => {
      setSearch({ ...search, value });
    }, 2000);
  };
  const handleMonth = (e) => {};
  const handleSum = (e) => {
    console.log(e.target.value);
    setStats(e.target.value);
  const handleMonth = (e) => {
    dispatch(Accoding_Month(e.target.value));
  };

  console.log("i am running", Transactions);
  return (
    <div className="min-h-[70vh] w-12/12 shadow-2xl m-auto bg-white mt-2">
      <Box className="m-auto w-[95%]">
@@ -72,21 +53,14 @@ const Home = () => {
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onChange={handleChange}
          />
          <Select
            placeholder="Select Month"
            width="150px"
            cursor="pointer"
            onChange={handleMonth}
          >
            {MonthArray.map((items, i) => {
              return (
                <option value={items} key={i}>
                  {items}
                </option>
              );
            })}
          </Select>
         <MonthModal/>

          <SelectTag name="Select Month" fun={handleMonth} />
          <MonthModal />
          <Link to="/chart" className="w-20">
            <Button colorScheme="whatsapp" w="100%">
              Stats
            </Button>
          </Link>
        </Flex>
        <TableContainer mt="20px">
          <Table>
@@ -111,7 +85,6 @@ const Home = () => {
        </TableContainer>
        <Pagination page={page} setPage={setPage} />
      </Box>

    </div>
  );
};
