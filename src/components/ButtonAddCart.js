import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { useState } from "react"
import ButtonComponent from "./ButtonComponent"

export default function ButtonAddCart({ children }) {
	const [count, setCount] = useState(0)
	const [hideButton, setHideButton] = useState(true)
	const [hideButtonGroup, setHideButtonGroup] = useState(false)

	const handleClick = () => {
		setHideButtonGroup(!hideButtonGroup)
		setHideButton(!hideButton)
		setCount(count + 1)
	}

	const handleIncrement = () => {
		setCount(count + 1)
	}

	const handleDecrement = () => {
		setCount(count - 1)

		if (count === 1) {
			setHideButtonGroup(false)
			setHideButton(true)
		}
	}

	return (
		<>
			{hideButton && (
				<ButtonComponent color="secondary" onClick={handleClick}>
					{children}
				</ButtonComponent>
			)}
			{hideButtonGroup && (
				<ButtonGroup
					variant="text"
					color="primary"
					aria-label="text primary button group"
				>
					<Button disabled={count === 0} onClick={handleDecrement}>
						-
					</Button>
					<div
						disabled
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontWeight: "bold",
							color: count > 5 ? "red" : "green"
						}}
					>
						{count}
					</div>
					<Button onClick={handleIncrement}>+</Button>
				</ButtonGroup>
			)}
		</>
	)
}
