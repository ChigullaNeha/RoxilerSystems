import React, { useEffect, useState } from "react";
// import UserTable from "./UserTable";
import { Flex } from "@chakra-ui/react";

const Pagination = ({ page, setPage }) => {
  //   console.log("i am details", details);


  const [disabled, setDisabled] = useState(false);
  const [incdisabled, setIncdisabled] = useState(false);
