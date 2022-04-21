import React, { useState, useEffect } from "react";
import PageName from "../components/PageName";
import SelectionCard from "../components/SelectionCard";
import axios from "axios";
import { motion } from "framer-motion";
import { baseUrl } from "../config";
import {
  Center,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

const transition = { transition: { duration: 0.3, type: "linear" } };

export default function Home() {
  const url = `${baseUrl}`;
  const [postsData, setPostsData] = useState([]);
  const [permData, setPermData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPostsData(res.data.data);
        setPermData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchText === "") setPostsData(permData);
    setPostsData(() =>
      permData.filter((item) =>
        item.data.title.toLowerCase().match(searchText.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setPostsData(postsData);
    }
    console.log(postsData);
  };

  if (loading) {
    return (
      <Center height={"100vh"}>
        <Spinner color="orange" position={"fixed"} />
      </Center>
    );
  } else {
    return (
      <div>
        <PageName />
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            ...transition,
          }}
          exit={{ y: 80, opacity: 0, ...transition }}
        >
          <FormControl maxW={{ base: "100%", md: "60%" }} paddingX="16px">
            <FormLabel>Search</FormLabel>
            <InputGroup>
              <InputLeftElement children={<SearchIcon />} />
              <Input onChange={handleChange} value={searchText} />
            </InputGroup>
          </FormControl>
        </motion.div>
        {postsData.map((data) => {
          return (
            <SelectionCard
              id={data.ref["@ref"].id}
              title={data.data.title}
              author={data.data.author}
              imgUrl={data.data.thumbnail}
              subheading={data.data.subtitle}
              date={data.data.date}
            />
          );
        })}
      </div>
    );
  }
}
