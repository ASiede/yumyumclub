import { TEST_YUMYUMCLUB_BASE_URL, YUMYUMCLUB_BASE_URL } from "../Constants";

export const getBaseUrl = () =>
  process.env.NODE_ENV === "production"
    ? YUMYUMCLUB_BASE_URL
    : TEST_YUMYUMCLUB_BASE_URL;
