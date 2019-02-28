import React, { Component } from "react";
import ShotForm from "../../components/ShotForm";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 440px;
  margin: 0 auto;
`;

export class NewShot extends Component {
  render() {
    return (
      <FormContainer>
        <h2>New Shot</h2>
        <ShotForm />
      </FormContainer>
    );
  }
}

export default NewShot;
