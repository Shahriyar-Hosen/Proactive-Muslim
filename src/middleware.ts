import { localePrefix, locales, pathnames } from "@/config";
import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

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
  publicRoutes: ["/", "/api/webhooks/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
