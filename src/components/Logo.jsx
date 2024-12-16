import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="logo">
      <i className="bi bi-wallet2"></i> <span className="logo-text">Wallet.</span>
    </Link>
  );
}
