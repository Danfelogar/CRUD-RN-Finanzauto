export enum TypeSlices {
  Root = 'root',
  Auth = 'auth',
  Setting = 'settings',
}

export enum TypeActions {
  //auth
  AuthSignIn = 'auth/signIn',
  AuthRegister = 'auth/register',
  AuthSignInGoogle = 'auth/signInGoogle',
  AuthSignOut = 'auth/signOut',
  //settings
  SettingsChangeThemeDarkMode = 'settings/changeThemeDarkMode',
  SettingsChangeThemeLightMode = 'settings/changeThemeLightMode',
  //userData
  UserDataGet = 'userData/get',
  UserDataGetById = 'userData/getById',
  UserDataCreate = 'userData/create',
  UserDataUpdate = 'userData/update',
  UserDataDelete = 'userData/delete',
}

export enum TypeEnvironment {
  Production = 'Production',
  Development = 'Development',
}

export enum TypeMSMErrorGeneric {
  GenericError = 'Ocurrió un error inesperado',
}

export enum TypeStateAuth {
  Pending = 'pending',
  Login = 'login',
  Logout = 'logout',
}

export enum TypeImage {
  Local = 'local',
  Remote = 'remote',
}
