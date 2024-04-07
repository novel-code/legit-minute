import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='mb-5 underline' onClick={() => navigate(-1)}>
        back
      </button>
      <p>Page Not Found</p>
    </div>
  );
}

export default NotFound;
