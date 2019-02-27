import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const UPLOAD_FILE_MUTATION = gql`
  mutation UPLOAD_FILE_MUTATION($file: Upload!) {
    singleUpload(file: $file)
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
    const { file } = this.state;
    console.log(file);
    return (
      <Mutation mutation={UPLOAD_FILE_MUTATION}>
        {(uploadFile, { loading, error }) => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                const { file } = this.state;

                uploadFile({
                  variables: { file: file }
                });
              }}>
              <input
                type="file"
                name="upload"
                id="upload"
                onChange={this.setFile}
              />
              <input type="submit" value="submit" />
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default UploadExample;
