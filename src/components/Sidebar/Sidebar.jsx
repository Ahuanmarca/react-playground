import React from "react";
import { Link } from "react-router-dom";
import { Sidenav, Nav } from "rsuite";
import "rsuite/Sidenav/styles/index.css";
import "rsuite/Nav/styles/index.css";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";

const SIDEBAR_LINKS = [
  { to: "/showmouseposition", title: "Mouse Position", icon: <DashboardIcon /> },
  { to: "/keyboardinput", title: "Keyboard Input", icon: <GroupIcon /> },
  { to: "/clickcounter", title: "Click Counter", icon: <MagicIcon /> },
  { to: "/driftingtimers", title: "Drifting Timers", icon: <MagicIcon /> },
  { to: "/sortabletable", title: "Sortable Table", icon: <MagicIcon /> },
  { to: "/languageselector", title: "Language Selector", icon: <MagicIcon /> },
  { to: "/gamelist", title: "Game List", icon: <MagicIcon /> },
  { to: "/fetchingonevent", title: "Fetching on Event", icon: <MagicIcon /> },
  { to: '/fetchingonmount', title: 'Fetching on mount', icon: <MagicIcon /> },
  { to: "/programmingjokes", title: "Programming Jokes", icon: <MagicIcon /> },
];

function NavItem({ to, title, icon, setActiveLink }) {

  return (
    <Nav.Item key={to} eventKey={to} icon={icon}>
      <Link
        onClick={() => setActiveLink(to)}
        className="nav-link"
        to={to}
      >
        {title}
      </Link>
    </Nav.Item>
  );
}

function Sidebar() {
  const [activeLink, setActiveLink] = React.useState("1");

  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={[]} style={{ width: 200 }}>
        <Sidenav.Body>
          <Nav activeKey={activeLink}>
            {/* Mapping the links! */}
            {SIDEBAR_LINKS.map((link) => {
              return (
                <NavItem key={link.to} setActiveLink={setActiveLink} {...link} />
              )
            })}

            <Nav.Menu eventKey="9" title="Data Fetching" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="9-1">Applications</Nav.Item>
              <Nav.Item eventKey="9-2">Channels</Nav.Item>
              <Nav.Item eventKey="9-3">Versions</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default Sidebar;
