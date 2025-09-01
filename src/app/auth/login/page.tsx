import { Metadata } from "next";
import LoginForm from "./LoginForm";
export const metadata: Metadata = {
  title: "Login Page",
  description: "Halaman login dummy",
};
export default function Login() {
  return <LoginForm />;
}
