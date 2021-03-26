import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { useCardStyles } from "../styles/card"
import ButtonAddCart from "./ButtonAddCart"

export default function SingleCard({ id, image, title, description, price }) {
	const classes = useCardStyles()

	return (
		<Card className={classes.root} key={id}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<CardActions>
					<ButtonAddCart>Add to Cart</ButtonAddCart>
				</CardActions>
				<CardActions>
					<div style={{ fontWeight: "bold" }}>{price}</div>
				</CardActions>
			</div>
		</Card>
	)
}
