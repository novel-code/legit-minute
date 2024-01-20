function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <h1>Something went wrong🤔</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}

export default ErrorFallback;
