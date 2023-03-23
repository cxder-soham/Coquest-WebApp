import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { RadioGroupField } from "../../ProjectComponents/RadioGroupField";
import HashtagSearch from "../../ProjectComponents/HashtagSearch";

type StyledTextFieldProps = {
    label: string;
    placeholder: string;
};

const StyledTextField = styled(TextField) <StyledTextFieldProps>`
	&& {
		margin-top: 28px;
		.MuiInputLabel-shrink {
			color: black;
		}
		& .placeholder-mod::placeholder {
			color: #a1a1a1;
		}
	}
`;
const ContentView = styled("div")({
    minWidth: 300,
    width: "60vw",
    maxWidth: 700,
});

const TitleField = styled(Typography)({
    marginTop: 5,
    fontWeight: 600,
    fontSize: 24,
    textAlign: "center",
});

const H20 = () => {
    const [categories, setCategories] = useState<string[]>([]); // State of all program types fetched
    const [hashtags, setHashtags] = useState<string[]>([]);

    const [projectName, setProjectName] = useState<string>(""); // Name state
    const [selectedType, setSelectedType] = useState(""); // Program type state
    const [description, setDescription] = useState<string>(""); // Description state
    const [objective, setObjective] = useState<string>(""); // Objective state
    const [initiative, setInitiative] = useState<string>(""); // Objective state

    const [initiativeOrCharity, setinitiativeOrCharity] = useState("yes"); // Radio choice 1
    const [participation, setParticipation] = useState("yes"); // Radio choice 2
    const [experience, setExperience] = useState("yes"); // Radio choice 3

    // Handles setting the program type to its state
    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedType(event.target.value);
    };

    // Handles setting the name to its state
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value);
    };

    // Handles setting the decription to its state
    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(event.target.value);
    };

    // Handles setting the objective to its state
    const handleObjectiveChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setObjective(event.target.value);
    };

    // Handles setting the decription to its state
    const handleInitiativeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInitiative(event.target.value);
    };

    // Handles setting the RADIO BUTTONs to its state
    const handleInitiativeOrCharityChange = (value: string) => {
        setinitiativeOrCharity(value);
    };
    const handleParticipationChange = (value: string) => {
        setParticipation(value);
    };
    const handleExperienceChange = (value: string) => {
        setExperience(value);
    };

    // Fetches on page load for list of Program Types available
    useEffect(() => {
        setCategories(["Option 1", "Option 2", "Option 3", "Option 4"]);
        let tempHtags: string[] = [];

        for (let i = 1; i <= 100; i++) {
            tempHtags.push(`#hashtag${i}`);
        }
        setHashtags(tempHtags);
    }, []);

    return (
        <ContentView>
            <TitleField>Basic Information</TitleField>

            <StyledTextField
                label="Project name"
                fullWidth
                placeholder="input"
                value={projectName}
                onChange={handleNameChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <FormControl variant="outlined" fullWidth style={{ marginTop: 31 }}>
                <TextField
                    select
                    label="Type of Project"
                    style={{ color: "black" }}
                    className="placeholder-mod"
                    defaultValue=""
                    InputLabelProps={{
                        style: { color: "black" },
                    }}
                    InputProps={{
                        inputMode: "text",
                    }}
                    onChange={handleTypeChange}
                // Must add placeholder here for "Select a category"
                >
                    <MenuItem disabled value="">
                        <em>Select a category</em>
                    </MenuItem>
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>

                <StyledTextField
                    label="Project description"
                    placeholder="Create a description for your project"
                    className="placeholder-mod"
                    value={description}
                    onChange={handleDescriptionChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    multiline
                    rows={4}
                />

                <StyledTextField
                    label="Project Objective"
                    placeholder="State the goal for your project"
                    className="placeholder-mod"
                    value={objective}
                    onChange={handleObjectiveChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    multiline
                    rows={4}
                />

                <HashtagSearch hashtags={hashtags} />
                <RadioGroupField
                    label="Is this a initiative or charity project?"
                    name="initiative-radio-btn-group"
                    options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                    ]}
                    onChange={handleInitiativeOrCharityChange}
                />

                <TextField
                    label="Purpose for Initiative"
                    placeholder="Why are you looking to achieve? Participants will be able to see your answer."
                    multiline
                    rows={4}
                    style={{ marginTop: 28 }}
                    InputLabelProps={{
                        shrink: true,
                        style: { color: "black" },
                    }}
                    InputProps={{
                        inputMode: "text",
                    }}
                    onChange={handleInitiativeChange}
                />

                <RadioGroupField
                    label="Who can participate in this project?"
                    name="participate-radio-btn-group"
                    options={[
                        { value: "public", label: "Anyone (Public)" },
                        {
                            value: "private",
                            label: "By Invite only (Private)",
                        },
                    ]}
                    onChange={handleParticipationChange}
                />

                <RadioGroupField
                    label="Do you have experience in project planning"
                    name="experience-radio-btn-group"
                    options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                    ]}
                    onChange={handleExperienceChange}
                />
            </FormControl>
        </ContentView>
    );
};

export default H20;
