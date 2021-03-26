import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useNavBarStyles } from "../styles/navBar"
import ButtonComponent from "./ButtonComponent"

export default function ButtonAppBar() {
	const classes = useNavBarStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" className={classes.title}>
						Shopping Cart
					</Typography>
					<ButtonComponent color="inherit">Login</ButtonComponent>
				</Toolbar>
			</AppBar>
		</div>
	)
}
