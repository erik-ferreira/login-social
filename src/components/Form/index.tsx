import React, { useState } from "react";
import * as AuthSession from "expo-auth-session";

import { User, UserProps } from "../User";
import { Button } from "../Button";

import { Container } from "./styles";

interface AuthSessionResponse {
  type: string;
  params: {
    access_token: string;
  };
}

export function Form() {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function handleGoogleSignIn() {
    try {
      const client_id =
        "997833609624-87plcd77d58ir1tdfj1c5injq4uqbe2n.apps.googleusercontent.com";
      const redirect_uri = "https://auth.expo.io/@erik_ferreira/login-social";
      const scope = encodeURI("profile email");
      const response_type = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthSessionResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params?.access_token}`
        );
        const userData = await response.json();

        setUser(userData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
      />

      <User user={user} />
    </Container>
  );
}
