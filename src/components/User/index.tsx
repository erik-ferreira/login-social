import React from "react";

import { Container, Photo, Name, Email } from "./styles";

export interface UserProps {
  name: string;
  email: string;
  picture: string;
}

interface UserComponentProps {
  user: UserProps;
}

export function User({ user }: UserComponentProps) {
  return (
    <Container>
      <Photo source={{ uri: user.picture }} />

      <Name>{user.name}</Name>

      <Email>{user.email}</Email>
    </Container>
  );
}
