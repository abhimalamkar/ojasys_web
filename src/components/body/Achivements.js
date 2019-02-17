import React from "react";
import { Header,Container, Grid } from "semantic-ui-react";

export default function Achivements() {
  return (
    <Container>
        <Header as="h1" textAlign='center'>OUR ACHIEVEMENTS</Header>
      <div className="divide32" />
      <Grid>
        <Grid.Row columns="8">
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
          <Grid.Column>
            <div className="gridColumsAchievement" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
