import NextAuth from "next-auth";
import createIntlMiddleware from "next-intl/middleware";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

import { localePrefix, locales, pathnames } from "@/config";

const intlMiddleware = createIntlMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

const { auth } = NextAuth(authConfig);

export default auth((req): Response => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicRoutes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const authPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${authRoutes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicPathnameRegex.test(req.nextUrl.pathname);
  const isAuthRoute = authPathnameRegex.test(req.nextUrl.pathname);

  if (isApiAuthRoute) {
    // return NextResponse.next();
    return intlMiddleware(req);
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      // return intlMiddleware(req);
    }
    // return NextResponse.next();
    return intlMiddleware(req);
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return intlMiddleware(req);
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
