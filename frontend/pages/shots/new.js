import React, { Component } from "react";
import Router from "next/router";
import styled from "styled-components";
import gql from "graphql-tag";
import { adopt } from "react-adopt";
import { Mutation } from "react-apollo";
import { Fieldset, Form, Button } from "../../components/styles";
import { ALL_SHOTS_QUERY } from "../../components/Shots";

const CREATE_SHOT_MUTATION = gql`
  mutation CREATE_SHOT_MUTATION(
    $title: String
    $description: String
    $likes: Int
    $image: Upload
  ) {
    createShot(
      title: $title
      description: $description
      likes: $likes
      image: $image
    ) {
      id
    }
  }
`;

const UPLOAD_FILE_MUTATION = gql`
  mutation UPLOAD_FILE_MUTATION($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
    }
  }
`;

const Composed = adopt({
  createShot: (
    <Mutation
      mutation={CREATE_SHOT_MUTATION}
      refetchQueries={[{ query: ALL_SHOTS_QUERY }]}
    />
  ),
  uploadImage: ({ render }) => (
    <Mutation mutation={UPLOAD_FILE_MUTATION}>
      {(mutation, result) => {
        return render({ mutation, result });
      }}
    </Mutation>
  )
});

const FormContainer = styled.div`
  width: 440px;
  margin: 0 auto;
`;

export class NewShot extends Component {
  state = {
    image: "",
    title: "",
    description: "",
    likes: 0
  };

  handleImageChange = e => {
    const {
      target: {
        validity,
        files: [file]
      }
    } = e;

    this.setState({
      image: file
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <FormContainer>
        <Composed>
          {({ createShot, uploadImage }) => (
            <Fieldset>
              <Form onSubmit={e => e.preventDefault()}>
                <label htmlFor="title">
                  Title <br />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="title"
                    id="title"
                  />
                </label>
                <label htmlFor="file">
                  Image <br />
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={this.handleImageChange}
                  />
                </label>
                <label htmlFor="description">
                  Description <br />
                  <textarea
                    onChange={this.handleChange}
                    name="description"
                    id="description"
                    rows="10"
                    cols="50"
                  />
                </label>

                <Button
                  type="submit"
                  onClick={e => {
                    e.preventDefault;

                    createShot({
                      variables: this.state
                    });
                    Router.push("/");
                  }}>
                  Submit
                </Button>
              </Form>
            </Fieldset>
          )}
        </Composed>
      </FormContainer>
    );
  }
}

export default NewShot;
