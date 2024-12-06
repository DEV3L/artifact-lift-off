import { ThemeProvider } from "@mui/material";
import { Content } from "./components/Content";
import { Head } from "./components/Head";
import theme from "./theme";

export default function Home() {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </>
  );
}
