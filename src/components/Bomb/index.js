import React from "react";
import ErrorBoundary from "components/ErrorBoundary";

export default class Bomb extends React.Component {
  render() {
    throw new Error("Throwing Error");
    return (
      <ErrorBoundary>
        <button data-testid="bomb">Bomb</button>
      </ErrorBoundary>
    );
  }
}
