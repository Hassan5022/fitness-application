import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
// styles
import "./Navbar.css";
import { Stack } from "@mui/material";

const Navbar = () => {
	return (
		<Stack
			direction='row' 
			justifyContent='space-around'
			sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}}}
		>
			<Link to="/">
				<img className="logo" src={logo} alt="logo" />
			</Link>
			<Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
				<Link
					className="link"
					style={{ borderBottom: "3px solid #FF2625" }}
					to="/"
				>
					Home
				</Link>
				<a className="link" href="#excersices">
					Excersices
				</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
