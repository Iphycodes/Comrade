import React from "react";
import { AdvertContainer, FormContainer, MainBackgroundContainer, MainContainer, TextContainer } from "./Login.styled";
import { Logo } from "../../Components/Logo/Logo.component.tsx";

const Login = () => {

    return (
        <MainBackgroundContainer>
          <MainContainer>
              <AdvertContainer>

              </AdvertContainer>
              <FormContainer>
                  <TextContainer>
                    <Logo/>
                    <h1>Hello Again!</h1>
                    <p>Welcome back Comrade</p>
                  </TextContainer>

                  <form>

                  </form>
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;