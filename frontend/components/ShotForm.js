import React from "react";
import { Fieldset, Form, Button } from "./styles";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { ALL_SHOTS_QUERY } from "./Shots";

const CREATE_SHOT_MUTATION = gql`
  mutation CREATE_SHOT_MUTATION(
    $title: String
    $description: String
    $image: String
    $largeImage: String
    $likes: Int
  ) {
    createShot(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      likes: $likes
    ) {
      id
    }
  }
`;

class ShotForm extends React.Component {
  state = {
    title: "",
    image: "",
    description: "",
    largeImage: "/static/img.png",
    likes: 0,
    another: ""
  };

  handleChange = e => {
    const {
      target: { validity, files }
    } = e;

    console.log(files);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_SHOT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_SHOTS_QUERY }]}>
        {(createShot, { loading, error }) => {
          return (
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
                    onChange={e => {
                      const {
                        target: {
                          validity,
                          files: [file]
                        }
                      } = e;

                      uploadImage({
                        variables: { file }
                      });
                    }}
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
                    createShot();
                    Router.push("/");
                  }}>
                  Submit
                </Button>
              </Form>
            </Fieldset>
          );
        }}
      </Mutation>
    );
  }
}

export default ShotForm;
