export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  examples__JSON: any;
};

export type ApiMutation = {
  __typename?: 'Mutation';
  createTodo: ApiTodo;
  switchDone: ApiTodo;
};


export type ApiMutationCreateTodoArgs = {
  input: ApiNewTodo;
};


export type ApiMutationSwitchDoneArgs = {
  id: Scalars['ID'];
};

export type ApiNewTodo = {
  text: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type ApiQuery = {
  __typename?: 'Query';
  todos: Array<ApiTodo>;
};

export type ApiTodo = {
  __typename?: 'Todo';
  createdAt: Scalars['Time'];
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
  user: ApiUser;
};

export type ApiUser = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum ApiFake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW'
}

export enum ApiFake__Types {
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  BankIdentifierCode = 'bankIdentifierCode',
  BitcoinAddress = 'bitcoinAddress',
  City = 'city',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  ColorName = 'colorName',
  CompanyBs = 'companyBS',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyName = 'companyName',
  Country = 'country',
  CountryCode = 'countryCode',
  County = 'county',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  DbCollation = 'dbCollation',
  DbColumn = 'dbColumn',
  DbEngine = 'dbEngine',
  DbType = 'dbType',
  DomainName = 'domainName',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  FileExtension = 'fileExtension',
  Filename = 'filename',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  FirstName = 'firstName',
  FullName = 'fullName',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  JobTitle = 'jobTitle',
  LastName = 'lastName',
  Latitude = 'latitude',
  Locale = 'locale',
  Longitude = 'longitude',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  MacAddress = 'macAddress',
  MimeType = 'mimeType',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  Number = 'number',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  PhoneNumber = 'phoneNumber',
  Product = 'product',
  ProductCategory = 'productCategory',
  ProductMaterial = 'productMaterial',
  ProductName = 'productName',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  SecondaryAddress = 'secondaryAddress',
  Semver = 'semver',
  State = 'state',
  StateAbbr = 'stateAbbr',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  StreetName = 'streetName',
  Url = 'url',
  UserAgent = 'userAgent',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  ZipCode = 'zipCode'
}

export type ApiFake__Color = {
  blue255?: InputMaybe<Scalars['Int']>;
  green255?: InputMaybe<Scalars['Int']>;
  red255?: InputMaybe<Scalars['Int']>;
};

export type ApiFake__ImageSize = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export enum ApiFake__LoremSize {
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Word = 'word',
  Words = 'words'
}

export type ApiFake__Options = {
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: InputMaybe<ApiFake__Color>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: InputMaybe<Scalars['String']>;
  /** Only for type `money` */
  decimalPlaces?: InputMaybe<Scalars['Int']>;
  /** Only for type `email` */
  emailProvider?: InputMaybe<Scalars['String']>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: InputMaybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  imageSize?: InputMaybe<ApiFake__ImageSize>;
  /** Only for type `lorem` */
  loremSize?: InputMaybe<ApiFake__LoremSize>;
  /** Only for type `money` */
  maxMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `money` */
  minMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  minNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `password` */
  passwordLength?: InputMaybe<Scalars['Int']>;
  /** Only for type `number` */
  precisionNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: InputMaybe<Scalars['Boolean']>;
  /** Only for type `streetAddress` */
  useFullAddress?: InputMaybe<Scalars['Boolean']>;
};
