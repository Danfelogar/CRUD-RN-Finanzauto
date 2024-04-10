export type RootStackMainParams = {
  PrivateNavigation: undefined;
  PublicNavigation: undefined;
};

export type RootStackPrivateParams = {
  Dashboard: undefined;
  Details: {id: string | number};
  FormUser: {id: string | number};
};

export type RootStackPublicParams = {
  Onboarding: undefined;
  Login: undefined;
};
