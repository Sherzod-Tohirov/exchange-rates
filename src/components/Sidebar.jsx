import { Col, Stack } from "react-bootstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import "@assets/css/sidebar.css";
import { useState } from "react";
export default function Sidebar() {
  const [hideSidebar, setHideSidebar] = useState(false);
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  return (
    <>
      <div
        className={`sidebar ${hideSidebar ? "hide" : ""}`}
        direction="vertical">
        <button
          className="sidebar-drawer-btn"
          onClick={() => setHideSidebar((p) => !p)}>
          <i className={`bi bi-arrow-${hideSidebar ? "right" : "left"}`}></i>
        </button>
        <Logo />
        <Stack direction="vertical">
          <Col>
            <Link
              className={`sidebar-link ${
                pathname === "/" ? "active-link" : ""
              }`}
              to={"/"}>
              <i className="bi bi-pie-chart-fill sidebar-icon"></i>{" "}
              <span className="sidebar-text">Asosiy panel</span>
            </Link>
          </Col>
          <Col>
            <Link
              className={`sidebar-link ${
                pathname === "/transactions" ? "active-link" : ""
              }`}
              to={"/transactions"}>
              <i className="bi bi-journal-text sidebar-icon"></i>{" "}
              <span className="sidebar-text">Tranzaksiyalar</span>
            </Link>
          </Col>
        </Stack>
      </div>
    </>
  );
}
