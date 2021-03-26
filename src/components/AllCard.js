import { Grid } from "@material-ui/core"
import SingleCard from "./SingleCard"
import { data } from "../database"

export default function AllCard() {
	return (
		<Grid container>
			{data.map((content) => (
				<SingleCard
					key={content.id}
					image={content.image}
					title={content.title}
					description={content.description}
					price={content.price}
				/>
			))}
		</Grid>
	)
}
