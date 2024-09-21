import "@coreui/coreui/dist/css/coreui.min.css";
import "./Navbar.css";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavLink,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CNavItem,
  CNavbarNav,
  COffcanvasBody,
  CCloseButton,
} from "@coreui/react";
import { useState } from "react";
function ManinNavbar() {
  const [visible, setVisible] = useState(false);
  return (
    <CNavbar className="bg-info navbar-pa" style={{ height: "80px" }}>
      <CContainer fluid>
        <CNavbarBrand style={{ marginLeft: "4rem", color: "white" ,fontWeight:"bold"}}>
          Teams
        </CNavbarBrand>
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        />
        <COffcanvas
          id="offcanvasNavbar"
          placement="end"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Offcanvas</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link2</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link3</CNavLink>
              </CNavItem>
              <CNavItem></CNavItem>
            </CNavbarNav>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  );
}

export default ManinNavbar;
