import React, { useState, useEffect } from "react";
import { Container, Text, Spinner, Center } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../config";

import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import MyStyle from "../components/MarkdownStyle";

import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function BlogPage() {
  const currentParam = useParams();
  const transition = { transition: { duration: 0.3, type: "linear" } };

  const [apiData, setApiData] = useState({});
  const [post, setPost] = useState("");
  const url = `${baseUrl}/${currentParam.id}`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPost(res.data.data.post);
        setApiData(res.data.data);
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
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          ...transition,
        }}
        exit={{ y: 300, opacity: 0, ...transition }}
      >
        <BlogTitle
          title={apiData.title}
          author={apiData.author}
          date={apiData.date}
        />
        <MyStyle>
          <Container
            p={{ base: "0" }}
            mb="100px"
            className="markdown-body"
            flex={{ base: undefined, md: 1 }}
            maxW={{ base: undefined, md: "100%" }}
          >
            <ReactMarkdown
              children={post}
              remarkPlugins={remarkGfm}
              rehypePlugins={rehypeKatex}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </Container>
        </MyStyle>
      </motion.div>
    );
  }
}

const BlogTitle = ({ title = "title", author = "author", date = "date" }) => {
  return (
    <div style={{ marginBottom: "10px", textAlign: "center" }}>
      <h1 className="blog-title">{title}</h1>

      <Text textAlign={"start"}>{`${author}, ${date}`}</Text>
    </div>
  );
};