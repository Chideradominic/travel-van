import { Link } from "react-router-dom";
export default function LoginComponent() {
  return (
    <>
      <div className="container login-container">
        <div className="login-content">
          <h1>Sign in to your account</h1>
          <form>
            <div>
              <label htmlFor="email">
                <input type="email" id="email" required />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <input type="password" id="password" required />
              </label>
            </div>
            <div>
              <input className="sumbmit-button" type="submit" value="Sign In" />
            </div>
          </form>
          <p>
            Dont have an account?{" "}
            <span>
              <Link to="/house">Create one now </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
