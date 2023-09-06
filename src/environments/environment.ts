// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the dummy data below with the real firebase configs
  firebaseConfig : {
    apiKey: "AIzaSyCjwaNbs6YtSSxJWWtex3r8lcUUc4Lk3IQ",
    authDomain: "live-resume-aa079.firebaseapp.com",
    projectId: "live-resume-aa079",
    storageBucket: "live-resume-aa079.appspot.com",
    messagingSenderId: "319529456459",
    appId: "1:319529456459:web:86ba181d28ac40be8ccece"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
