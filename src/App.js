import Grid from "@material-ui/core/Grid"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import "./App.css"

export default function App() {
	return (
		<Grid container>
			<NavBar />
			<Body />
		</Grid>
	)
}
