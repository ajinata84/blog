import React, { useState, useEffect } from "react";
import { Container, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import MyStyle from "../components/MarkdownStyle";

import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function BlogPage() {
  const file_name = "dummydata.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            setPost(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: "linear" },
      }}
      exit={{ y: 300, opacity: 0 }}
    >
      <BlogTitle
        title={"Lorem Ipsum Dolor Sit Amet Consectetur"}
        author={"Ajinata"}
        date={"2020 / 10 / 19"}
      />
      <MyStyle>
        <Container
          p={{ base: "0" }}
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

const BlogTitle = ({ title = "title", author = "author", date = "date" }) => {
  return (
    <div style={{ marginBottom: "10px", textAlign: "center" }}>
      <h1 className="blog-title">{title}</h1>

      <Text textAlign={"start"}>{`${author}, ${date}`}</Text>
    </div>
  );
};
