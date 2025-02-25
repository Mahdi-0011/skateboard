import { useState } from "react";
import Button from "../Button/Button";
import './Counter.scss'

export default function Counter() {
	const [value, setValue] = useState(0);

	return (
		<>
		<div className="Counter">
			<p>Value: {value}</p>
			<Button
				title="+1"
				handleClick={() => {
					setValue(value + 1);
				}}
			/>
			</div>
		</>
	);
}
