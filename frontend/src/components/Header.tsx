import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: "#171717", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#10A37F"
                to="/chat"
                text="Ir al Chat"
                textColor="white"
              />
              <NavigationLink
                bg="#212121"
                textColor="white"
                to="/"
                text="Cerrar sesión"
                sx={{
                  border: "1px solid white",
                  borderRadius: "5px",
                  padding: "8px 16px",
                }}
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#212121"
                to="/login"
                text="Iniciar sesión"
                textColor="white"
                sx={{
                  border: "1px solid white",
                  borderRadius: "5px",
                  padding: "8px 16px",
                }}
              />
              <NavigationLink
                bg="#10A37F"
                textColor="white"
                to="/signup"
                text="Registrarse"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
