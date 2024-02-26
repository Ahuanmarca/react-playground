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
]

function Sidebar() {
  const [activeLink, setActiveLink] = React.useState("1");

  return (
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={[]} style={{ width: 200 }}>
        <Sidenav.Body>
          <Nav activeKey={activeLink}>
            {SIDEBAR_LINKS.map((link, index) => {
              return (
                <Nav.Item key={index} eventKey={index + 1} icon={link.icon}>
                  <Link
                    onClick={() => setActiveLink(index + 1)}
                    className="nav-link"
                    to={link.to}
                  >
                    {link.title}
                  </Link>
                </Nav.Item>
              );
            })}


            {/* <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              <Link
                onClick={() => setActiveLink("1")}
                className="nav-link"
                to="/showmouseposition"
              >
                Mouse Position
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              <Link
                onClick={() => setActiveLink("2")}
                className="nav-link"
                to="/keyboardinput"
              >
                Keyboard Input
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<MagicIcon />}>
              <Link
                onClick={() => setActiveLink("3")}
                className="nav-link"
                to="/clickcounter"
              >
                Click Counter
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<MagicIcon />}>
              <Link
                onClick={() => setActiveLink("4")}
                className="nav-link"
                to="/driftingtimers"
              >
                Drifting Timers
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<MagicIcon />}>
              <Link
                onClick={() => setActiveLink("5")}
                className="nav-link"
                to="/sortabletable"
              >
                Sortable Table
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="6"  icon={<MagicIcon />}>
              <Link
                onClick={() => setActiveLink("6")}
                className="nav-link"
                to="/languageselector"
              >
                Language Selector
              </Link>
            </Nav.Item> */}

            <Nav.Menu eventKey="9" title="Settings" icon={<GearCircleIcon />}>
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
