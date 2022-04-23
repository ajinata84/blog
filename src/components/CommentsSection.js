import React, { useState, useEffect } from "react";
import {
  Heading,
  Textarea,
  Input,
  FormLabel,
  Button,
  FormControl,
  FormErrorMessage,
  Center,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import { motion } from "framer-motion";

const endpoint = `${baseUrl}/comments`;
const transition = { transition: { duration: 0.3, type: "linear" } };

export default function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const postId = useParams().id;

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get(`${endpoint}/${postId}`)
      .then((res) => {
        setComments(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  if (loading) {
    return (
      <Center>
        <Spinner color="orange" />
      </Center>
    );
  } else {
    return (
      <>
        <Box my={"12"}>
          <hr />
        </Box>
        <Heading as={"h3"}>Kirim Komentar</Heading>
        <FormikComment refresh={handleRefresh} />
        <Heading as={"h3"} pb={2}>
          Komentar
        </Heading>
        {comments.length === 0 ? <h5>Masih Belum ada komentar!</h5> : <span />}
        {comments.map((comment) => (
          <motion.div
            style={{ marginBottom: "10px" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              ...transition,
            }}
            exit={{ y: 300, opacity: 0, ...transition }}
          >
            <h5>{comment.data.user}</h5>
            <span>{comment.data.message}</span>
            <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
          </motion.div>
        ))}
      </>
    );
  }
}

function FormikComment({ refresh }) {
  const postId = useParams().id;

  function validateUser(value) {
    let error;
    if (!value) {
      error = "Nama dibutuhkan";
    }
    return error;
  }

  function validateComment(value) {
    let error;
    if (!value) {
      error = "Komentar dibutuhkan";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        post_id: postId,
        user: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        axios
          .post(endpoint, values)
          .then(() => {
            refresh();
            actions.setSubmitting(false);
            actions.resetForm();
          })
          .catch((err) => console.log(err));
      }}
    >
      {(props) => (
        <Form>
          <Field name="user" validate={validateUser}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.user && form.touched.user}
                mb={4}
              >
                <FormLabel htmlFor="user">Nama</FormLabel>
                <Input {...field} id="user" placeholder="Nama kamu" />
                <FormErrorMessage>{form.errors.user}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message" validate={validateComment}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
              >
                <FormLabel htmlFor="message">Komentar</FormLabel>
                <Textarea {...field} placeholder="Komentar kamu" size="sm" />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            my={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Kirim
          </Button>
        </Form>
      )}
    </Formik>
  );
}
