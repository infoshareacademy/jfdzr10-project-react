import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    const _user = JSON.parse(localStorageUser ? localStorageUser : "{}");

    setUser(_user);

    loginContext.setIsLoggedIn(!!_user?.id);
    if (!_user?.id) {
      alert("Nie jesteś zalogowany");
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <h1>AddPosts</h1>
    </div>
  );
}

export default AddPost;
