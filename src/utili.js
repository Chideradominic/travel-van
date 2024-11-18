import { redirect } from "react-router-dom";
export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    console.log("User not authenticated, redirecting to /login");
    throw redirect("/login");
  }
}
