import React from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import  Button  from './Button'

export default function Client_Case_Study() {
  return (
    <Container className="details_container">
      <Header as="h1">CLIENT CASE STUDIES</Header>
      <div className="divide32" />
      <p className='clientText'>We measure our success by the success of our customers. See how ambitious innovators introduce groundbreaking transformations to their businesses with ELEKS as their trusted vendor.</p>
      <div className="divide32" />
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="gridColums" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColums" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColums" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="divide64" />
    </Container>
  );
}
