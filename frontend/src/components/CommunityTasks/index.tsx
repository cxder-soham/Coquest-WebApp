import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";
import { get } from "../../apiInterface";
import APIReferenceComponent from "../../APIReferenceComponent";

const Header = styled(Typography)({
	fontWeight: 600,
	paddingTop: 30,
	paddingLeft: 30,
	fontSize: "16px",
	lineHeight: "24px",
	color: "#0000000",
});

const CommunityContainer = styled.div({
	backgroundColor: "#D9D9D9",
	borderRadius: 10,
	width: "95%",
	height: 329,
	margin: "auto",
});

const CustomGrid = styled(Grid)({
	width: "100%",
	height: 250,
	overflow: "auto",
	margin: "auto",
	padding: 15,
	paddingTop: 0,
});
const tasks: TaskType[] = [
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		location: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
];

type TaskType = {
	taskName: string | null;
	communityName: string | null;
	location: string | null;
	description: string | null;
};

const CommunityTasks = () => {
	const [taskContents, setTaskContents] = useState([]);

	useEffect(() => {
		try {
			get("getTasks", ["name", "description"]).then(setTaskContents);
		} catch (error) {
			console.error("Error occured:", error);
		}
	}, []);

	return (
		<CommunityContainer>
			<Header>All community tasks</Header>
			<CustomGrid container spacing={1}>
				{/* <APIReferenceComponent /> */}
				{/* {taskContents &&
					taskContents.map((data: any) => (
						<div>{JSON.stringify(data)}</div>
					))} */}
				{tasks &&
					tasks.map((item, index) => (
						<Grid item key={index} lg={4}>
							<TaskCard
								name={item.taskName}
								community={item.communityName}
								location={item.location}
								description={item.description}
								type="small"
							/>
						</Grid>
					))}
			</CustomGrid>
		</CommunityContainer>
	);
};

export default CommunityTasks;
