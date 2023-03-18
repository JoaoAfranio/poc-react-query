import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
