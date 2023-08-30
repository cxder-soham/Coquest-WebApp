import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import TaskCard from "../../pages/Coop/CoopComponents/TaskCard";

//props for task label and link to task page
type MyTasksContainerProps = {
	label: string;
	seeAllLink: string;
};

//array of task contents
let taskContents: any[] = [
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
	{
		taskName: "Task Name",
		communityName: "Community name",
		loction: "Location",
		description:
			"Description. Lorem ipsum dolor sit amet consectetur. Nisl sollicitudin aliquam quam.",
	},
];

const SeeAllLink = styled(Link)({
	fontWeight: 400,
	fontSize: "13px",
	color: "#000000",
});

const Label = styled(Typography)({
	fontWeight: 600,
	fontSize: 16,
	color: "#000000",
	lineHeight: "24px",
});

const TasksContainer = styled.div({
	backgroundColor: "#F3F3F3",
	borderRadius: "10px",
	padding: 30,
	height: "91%",
	maxHeight: 638,
	paddingTop: 20,
});

const ContainerHeader = styled.div({
	display: "flex",
	justifyContent: "space-between",
});

const TasksListWrapper = styled.div({
	padding: 10,
	paddingTop: 30,
	height: 538,
	overflow: "auto",
});
//maps through data to display on each task card
//places the link in upper right hand corner
const MyTasksContainer = ({ label, seeAllLink }: MyTasksContainerProps) => {
	return (
		<TasksContainer>
			<ContainerHeader>
				<Label>{label}</Label>
				<SeeAllLink href={seeAllLink} color="#000000">
					See all
				</SeeAllLink>
			</ContainerHeader>
			<TasksListWrapper>
				{taskContents.map((item, index) => {
					return (
						<TaskCard
							key={index}
							name={item.taskName}
							community={item.communityName}
							location={item.location}
							description={item.description}
							type="large"
							style={{
								marginBottom: "14px",
							}}
						/>
					);
				})}
			</TasksListWrapper>
		</TasksContainer>
	);
};

export default MyTasksContainer;
