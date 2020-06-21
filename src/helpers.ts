import ReactGA from "react-ga";

export const to = (path: string) => `${process.env.PUBLIC_URL}${path}`;

ReactGA.initialize("UA-170136269-1", {
  testMode: process.env.NODE_ENV !== "production",
});
console.log(`GA in testMode ${process.env.NODE_ENV !== "production"}`);

export const pageView = (path: string) => ReactGA.pageview(path);
export const event = (
  action: string,
  label: string = "",
  category: string = "User"
) => ReactGA.event({ action, category, label });
