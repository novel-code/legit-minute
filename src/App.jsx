import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Response from "./pages/Response";
import Reward from "./pages/Reward";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { CLIENT_ID } from "./constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "./services/supabase";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 21600 * 60,
      },
    },
  });

  return (
    <>
      {/* <GoogleOAuthProvider clientId={CLIENT_ID}> */}
      <SessionContextProvider supabaseClient={supabase}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to={"/response"} />} />
                <Route path='/response' element={<Response />} />
                <Route path='/reward' element={<Reward />} />
              </Route>
              <Route path='login' element={<Login />} />
              <Route path='*' element={<p>Page Not Found</p>} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{
              margin: "8px",
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </SessionContextProvider>
      {/* </GoogleOAuthProvider> */}
    </>
  );
}

export default App;
{
  /* <Route index path='/' element={<Navigate to={"home"} />} />
            <Route path='home' element={<Home />} /> */
}
