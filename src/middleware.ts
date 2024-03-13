// // import { authMiddleware } from "@clerk/nextjs";

// // export default authMiddleware({
// //   publicRoutes: ["/api/webhooks/clerk"],
// // });

// // export const config = {
// //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// // };

// import { authMiddleware } from "@clerk/nextjs";
// import createMiddleware from "next-intl/middleware";

// const intlMiddleware = createMiddleware({
//   locales: ["en", "bn"],

//   defaultLocale: "en",
// });

// export default authMiddleware({
//   beforeAuth: (req) => {
//     // Execute next-intl middleware before Clerk's auth middleware
//     return intlMiddleware(req);
//   },

//   // Ensure that locale specific sign-in pages are public /:locale
//   publicRoutes: ["/api/webhooks/clerk"],
// });

// // export const config = {
// //   matcher: [
// //     "/((?!.+\\.[\\w]+$|_next).*)",
// //     "/",
// //     "/(api|trpc)(.*)",
// //     "/(bd|en)/:path*",
// //   ],
// // };

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./config";

const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/", "/api/webhooks/clerk", "/:locale/sign-in"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
