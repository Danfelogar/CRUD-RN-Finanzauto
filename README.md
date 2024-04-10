# CRUD-React-native-CLI-Finanzauto

The architecture of your project is based on a modular structure, which means it is organized around specific modules or functionalities. This structure has several advantages that make it suitable for mobile application development projects, especially in the context of React Native. These advantages include maintainability, code reusability, scalability, flexibility in development, as modules can be modified or replaced without affecting the overall functionality of the application, and it allows for parallel development of different modules by different teams or developers.

### Setup Environment

The project was created in react native with react native cli and typescript. [ See official docs](https://reactnative.dev/) to set up the environment.


### Run

**Environment**

Remember that for the correct functioning of the project it is necessary to rename the file ".env.example" to ".env" since it contains all the necessary credentials to start the project.

**Install dependencies**

```
yarn
```

**Install IOS Pods**
cd ios to navigate to the ios folder.
```
 install Bundler
bundle exec pod install
```
 to install the iOS dependencies managed by CocoaPods.
**Run IOS**

Remember to have an iPhone 14 Pro Max in the emulator or alternatively delete the line of code in package.json

```
yarn ios
```

**Run Android**

```
yarn android
```

### 🛠 Tech and Libraries

- [React-Native](https://reactnative.dev/): Library js
- [TypeScript](https://www.typescriptlang.org/): Application typing stronger
- [React Navigation](https://reactnavigation.org/): Routing and navigation
- [Redux Toolkit](https://redux-toolkit.js.org/Í): Data storage efficient Redux
- [React Hook Form](https://react-hook-form.com/get-started): Build scalable and performant forms
- [yup](https://www.npmjs.com/package/yup): Object schema validation in JavaScript
- [Firebase](https://firebase.google.com/docs/web/setup?hl=es): Servicio en la nube para gestionar login, registro y las tablas y estructura de datos
- [React Native Firebase](https://rnfirebase.io/): bridge to use firebase with react native cli
- [react-native-toast-notifications](https://www.npmjs.com/package/react-native-toast-notifications): Alert manager with user-friendly interface

### App Screenshots

|                                 |                                     Mobile                                  |
| :------------------------------:| :--------------------------------------------------------------------------:|
|         Onboarding Screen       |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.16.00%PM.png)     |
|            Login Screen         |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.16.33%PM.png)     |
|             Home Screen         |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.17.32%PM.png)     |
|         Details Modal Screen    |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.19.46%PM.png)     |
|            Form Create          |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.18.20%PM.png)     |
|             Form Update         |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.19.00%PM.png)     |
|            Modal delete         |     ![](src/assets/screenshots/Screenshot%2024-04-10%at%6.17.53%PM.png)     |

# Link-video-demo-app

[![Alt text](https://img.youtube.com/vi/s4xSoJMHnKE/0.jpg)](https://www.youtube.com/watch?v=s4xSoJMHnKE)


# Command tree for the files

```
├── App.tsx
├── Gemfile
├── Gemfile.lock
├── README.md
├── app.json
├── babel.config.js
├── index.js
├── jest.config.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── src
│   ├── assets
│   │   ├── backgroundPoint.png
│   │   ├── dietchGroupLogo.jpeg
│   │   ├── notImg.png
│   │   └── screenshots
│   │       ├── Screenshot 2024-04-10 at 6.16.00 PM.png
│   │       ├── Screenshot 2024-04-10 at 6.16.33 PM.png
│   │       ├── Screenshot 2024-04-10 at 6.17.32 PM.png
│   │       ├── Screenshot 2024-04-10 at 6.17.53 PM.png
│   │       ├── Screenshot 2024-04-10 at 6.18.20 PM.png
│   │       ├── Screenshot 2024-04-10 at 6.19.00 PM.png
│   │       └── Screenshot 2024-04-10 at 6.19.46 PM.png
│   ├── components
│   │   ├── Button.tsx
│   │   ├── HandlerImage.tsx
│   │   ├── InputGeneric.tsx
│   │   ├── InputSelectGeneric.tsx
│   │   ├── ModalConfirm.tsx
│   │   ├── StandardWrapper.tsx
│   │   ├── index.ts
│   │   └── styles.ts
│   ├── navigation
│   │   ├── MainNavigation.tsx
│   │   ├── PrivateNavigation.tsx
│   │   ├── PublicNavigation.tsx
│   │   └── index.ts
│   ├── redux
│   │   ├── rootReducer.ts
│   │   ├── slices
│   │   │   ├── auth.ts
│   │   │   ├── settings.ts
│   │   │   └── userData.ts
│   │   └── store.ts
│   ├── screens
│   │   ├── dashboard
│   │   │   ├── Dashboard.tsx
│   │   │   ├── components
│   │   │   │   ├── CardUser.tsx
│   │   │   │   ├── FlatListCardUsers.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   ├── index.ts
│   │   │   │   ├── useCardUser.tsx
│   │   │   │   └── useDashboard.tsx
│   │   │   ├── index.ts
│   │   │   └── styles.ts
│   │   ├── details
│   │   │   ├── Details.tsx
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── useDetails.tsx
│   │   ├── formUser
│   │   │   ├── FormUser.tsx
│   │   │   ├── components
│   │   │   │   ├── FormUpdateOrCreate.tsx
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── useFormUser.tsx
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── Login.tsx
│   │   │   ├── components
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   └── useLogin.tsx
│   │   └── onboarding
│   │       ├── Onboarding.tsx
│   │       ├── index.ts
│   │       └── styles.ts
│   ├── services
│   │   └── userData.ts
│   ├── types
│   │   ├── RootStackMainParams.d.ts
│   │   ├── auth.d.ts
│   │   ├── customComponents.d.ts
│   │   ├── env.d.ts
│   │   ├── react-native-crypto.d.ts
│   │   ├── response.d.ts
│   │   ├── settings.d.ts
│   │   └── userData.d.ts
│   └── utils
│       ├── constEnums.ts
│       ├── constants.ts
│       ├── index.ts
│       ├── parsingTitle.ts
│       ├── tokenGenerator.ts
│       └── yupValidations
│           ├── index.ts
│           ├── validateUserDataCreate.ts
│           ├── validateUserDataUpdate.ts
│           └── validationLogin.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```