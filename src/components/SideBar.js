import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useSideBarStyles } from "../styles/sidebar"

export default function SideBar() {
	const classes = useSideBarStyles()

	return (
		<Paper className={classes.root}>
			<MenuList>
				<MenuItem>
					<Typography variant="inherit" noWrap>
						All Dishes
					</Typography>
				</MenuItem>
				<MenuItem>
					<Typography variant="inherit" noWrap>
						Indian
					</Typography>
				</MenuItem>
				<MenuItem>
					<Typography variant="inherit" noWrap>
						American
					</Typography>
				</MenuItem>
				<MenuItem>
					<Typography variant="inherit" noWrap>
						Italian
					</Typography>
				</MenuItem>
			</MenuList>
		</Paper>
	)
}
