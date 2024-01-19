// import styled from "styled-components";
// import { useUser } from "./services/useUser";
// import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoading } = useAuth();

  // 2. if ther is NO authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while loading, show a spinner
  if (isLoading) return <p className='mt-4 text-center'>Loading...</p>;

  // 4. If there IS a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
