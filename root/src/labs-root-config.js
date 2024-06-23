// import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@labs/navbar",
//   app: () => System.import("@labs/navbar"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@labs/delivery",
//   app: () => System.import("@labs/delivery"),
//   activeWhen: ["/delivery"]
// });

// registerApplication({
//   name: "@labs/sidebar",
//   app: () => System.import("@labs/sidebar"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@labs/topbar",
//   app: () => System.import("@labs/topbar"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });


import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

//const myErrorParcel = singleSpaReact({...});
//const settingsLoader = singleSpaReact({...});

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"), {
    // errors: {
    //   navError: myErrorParcel
    //   // alternatively:
    //   // navError: "<h1>Oops! The navbar isn't working right now</h1>"
    // },
    // loaders: {
    //   loadingTopNav: `<nav class="placeholder"></nav>`,
    //   settings: settingsLoader
    // }
  }
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();