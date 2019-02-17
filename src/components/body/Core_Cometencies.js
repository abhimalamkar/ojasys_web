import React from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import  Button  from './Button'

export default function Core_Cometencies() {
  return (
    <Container className="details_container">
      <Header as="h1">OUR CORE COMPETENCIES</Header>
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
      <Button className='center'/>
    </Container>
  );
}
