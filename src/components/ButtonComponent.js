import Button from "@material-ui/core/Button"
export default function ButtonComponent({
	color,
	onClick,
	disabled = false,
	children,
}) {
	return (
		<Button color={color} onClick={onClick} disabled={disabled}>
			{children}
		</Button>
	)
}
