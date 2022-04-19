import React, { useState, useEffect } from "react";
import PageName from "../components/PageName";
import SelectionCard from "../components/SelectionCard";
import axios from "axios";
import { baseUrl } from "../config";
import { Center, Spinner } from "@chakra-ui/react";

export default function Home() {
  const url = `${baseUrl}`;
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPostsData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <Center height={"100vh"}>
        <Spinner color="orange" />
      </Center>
    );
  } else {
    return (
      <div>
        <PageName />
        {postsData.map((data) => {
          console.log(data);
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
