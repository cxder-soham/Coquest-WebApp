import React from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styled from "@emotion/styled";

type TaskCardProps = CardProps & {
	name: string | null;
	community: string | null;
	location: string | null;
	description: string | null;
	type: "small" | "large";
};

const Name = styled(Typography)({
	fontWeight: 600,
	fontSize: 16,
	color: "black",
	lineHeight: "24px",
});

const Body = styled(Typography)({
	fontWeight: 400,
	fontSize: 5,
	lineHeight: "8px",
});

const Spacer = styled.div({
	height: 8,
});

const ChevronIcon = styled(ChevronRightIcon)({
	color: "black",
	fontSize: 16,
});

const TaskCard = ({
	name,
	community,
	location,
	description,
	type,
	...rest
}: TaskCardProps) => {
	const CustomCard = styled(Card)({
		height: type === "large" ? 130 : 104,
		width: type === "large" ? 234 : 161,
	});

	return (
		<CustomCard {...rest}>
			<CardHeader
				action={
					<IconButton>
						<ChevronIcon />
					</IconButton>
				}
				title={<Name>{name}</Name>}
				subheader={
					<>
						<Body>
							{community} <br /> {location}
						</Body>
						<Spacer />
						<Body> {description}</Body>
					</>
				}
			/>
		</CustomCard>
	);
};

export default TaskCard;
