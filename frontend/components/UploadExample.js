import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const UPLOAD_FILE_MUTATION = gql`
  mutation UPLOAD_FILE_MUTATION($file: Upload!) {
    singleUpload(file: $file) {
      id
      filename
    }
  }
`;

export class UploadExample extends Component {
  state = {
    file: ""
  };

  setFile = e => {
    const {
      target: {
        validity,
        files: [file]
      }
    } = e;

    this.setState({ file });
  };

  render() {
    return (
      <Mutation mutation={UPLOAD_FILE_MUTATION}>
        {(uploadFile, { loading, error, data }) => {
          console.log(data, loading, error);
          return (
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

                  uploadFile({
                    variables: { file: file }
                  });
                }}
              />
            </label>
          );
        }}
      </Mutation>
    );
  }
}

export default UploadExample;
