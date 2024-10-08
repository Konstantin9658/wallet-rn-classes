/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * MercuryHub API
 * MercuryHub ASP.NET Core Web API
 * OpenAPI spec version: v1
 */

export interface TeamResponse {
  id?: number;
  name?: string | null;
}

export type GetApiTransactionsMyParams = {
  StartDate?: string;
  EndDate?: string;
  Type?: TransactionType;
  SortBy?: SortBy;
  SortOrder?: SortOrder;
  Page?: number;
  PageSize?: number;
};

export type GetApiProfileSearchParams = {
  Find?: string;
  Count?: number;
};

export type PostApiAccountSsoGoogleParams = {
  /**
   * Comma separated services requested permissions ex.: shortener, cards. If empty - returns permissions for all services.
   */
  services?: string;
};

export interface UserPhotoResponse {
  middle?: string | null;
  origin?: string | null;
  thumbnail?: string | null;
}

export interface UserBalanceUpdatedResponse {
  balance?: number;
}

export interface TransferCoinsCommand {
  amount?: number;
  to?: string | null;
}

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export const TransactionType = {
  Debit: "Debit",
  Credit: "Credit",
  Transfer: "Transfer",
} as const;

export interface TransactionResponse {
  amount?: number;
  comment?: string | null;
  creditUserName?: string | null;
  date?: string;
  debitUserName?: string | null;
  id?: number;
  title?: string | null;
  transactionType?: TransactionType | null;
}

export interface TransactionResponsePaginationResponse {
  data?: TransactionResponse[] | null;
  paginationContext?: PaginationContext;
}

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

export type SortBy = (typeof SortBy)[keyof typeof SortBy];

export const SortBy = {
  Date: "Date",
} as const;

export type ScopeRegionEnum =
  (typeof ScopeRegionEnum)[keyof typeof ScopeRegionEnum];

export const ScopeRegionEnum = {
  Ru: "Ru",
  Int: "Int",
} as const;

export interface RefreshTokenCommand {
  token?: string | null;
}

export interface RedeemCoinsResponse {
  count?: number;
}

export interface RedeemCoinsCommand {
  promoCode?: string | null;
}

export type PublicKeyOutput =
  (typeof PublicKeyOutput)[keyof typeof PublicKeyOutput];

export const PublicKeyOutput = {
  String: "String",
  JWK: "JWK",
} as const;

export interface ProfileSearchResponse {
  email?: string | null;
  firstName?: string | null;
  id?: string;
  jobTitle?: string | null;
  lastName?: string | null;
  picture?: string | null;
  teams?: TeamResponse[] | null;
}

export interface PaginationContext {
  page?: number;
  pageSize?: number;
  totalPageCount?: number;
  totalRowCount?: number;
}

export type MyProfileResponseServices = {
  [key: string]: string[] | null;
} | null;

export interface MyProfileResponse {
  balance?: number;
  email?: string | null;
  firstName?: string | null;
  id?: string;
  jobTitle?: string | null;
  lastName?: string | null;
  location?: string | null;
  phone?: string | null;
  services?: MyProfileResponseServices;
  teams?: TeamResponse[] | null;
  userPhoto?: UserPhotoResponse;
}

export interface LoginSsoGoogleCommand {
  idToken?: string | null;
}

export interface JwtWithRefreshResponse {
  accessToken?: string | null;
  accessTokenExpiresIn?: number;
  accessTokenType?: string | null;
  issuedAt?: string;
  refreshToken?: string | null;
  refreshTokenExpiresIn?: number | null;
}

export interface JwtResponse {
  accessToken?: string | null;
  accessTokenExpiresIn?: number;
  accessTokenType?: string | null;
  issuedAt?: string;
}

export type ImageSize = (typeof ImageSize)[keyof typeof ImageSize];

export const ImageSize = {
  Thumbnail: "Thumbnail",
  Middle: "Middle",
  Original: "Original",
} as const;

export interface ErrorDetail {
  message?: string | null;
  source?: string | null;
}

export interface ErrorResponse {
  code?: string | null;
  details?: ErrorDetail[] | null;
  message?: string | null;
  readonly success?: boolean;
}
