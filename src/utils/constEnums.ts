export enum TypeSlices {
  Root = 'root',
  Auth = 'auth',
  CockTail = 'cocktail',
}

export enum TypeActions {
  //auth
  AuthSignIn = 'auth/signIn',
  AuthRegister = 'auth/register',
  AuthSignInGoogle = 'auth/signInGoogle',
  AuthSignOut = 'auth/signOut',
  //cocktail
  CocktailByName = 'cocktail/byName',
  CocktailByIngredient = 'cocktail/byIngredient',
  CocktailByCategory = 'cocktail/byCategory',
  CocktailByMostPopular = 'cocktail/byMostPopular',
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
