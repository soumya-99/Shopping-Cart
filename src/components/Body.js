import Grid from "@material-ui/core/Grid"
import AllCard from "./AllCard"
import SideBar from "./SideBar"

export default function Body() {
	return (
		<>
			<Grid
				container
				style={{
					margin: 20,
				}}
			>
				<Grid item xs={4}>
					<SideBar />
				</Grid>
				<Grid item xs={8}>
					<AllCard />
				</Grid>
			</Grid>
		</>
	)
}
