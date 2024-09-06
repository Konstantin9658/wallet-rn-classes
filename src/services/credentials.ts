import { JwtWithRefreshResponse } from "api/backend/index.schemas";
import * as yup from "yup";
import { makeStorage, useStorage } from "./storage";

const CredentialsSchema: yup.ObjectSchema<JwtWithRefreshResponse> = yup
  .object()
  .shape({
    accessToken: yup.string(),
    accessTokenExpiresIn: yup.number(),
    accessTokenType: yup.string(),
    issuedAt: yup.string(),
    refreshToken: yup.string(),
    refreshTokenExpiresIn: yup.number(),
  });

export const credentials = makeStorage(CredentialsSchema, "credentials");

export const useCredentials = () => useStorage(credentials);
