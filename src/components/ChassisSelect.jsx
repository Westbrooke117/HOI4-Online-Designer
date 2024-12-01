import {Box, Button, Image, Stack, Text} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem} from "./ui/menu.jsx";
import {generateSubCategories} from "../utils/generateSubCategories.js";
import {filterModulesBySubcategory} from "../utils/filterModules.js";
import {useState} from "react";
import PropTypes from "prop-types";

const ChassisSelect = ({activeDesign, updateDesign}) => {
    const [selectedChassis, setSelectedChassis] = useState(activeDesign["Chassis"]["Part Name"]);

    const handleClick = (chassis) => {
        setSelectedChassis(chassis.value)
        updateDesign("Chassis", chassis.value)
    }

    return (
        <Box w={600} h={215} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <MenuRoot>
                <MenuTrigger>
                    <Stack gap={0}>
                        <Text textAlign={'center'}>{selectedChassis}</Text>
                        <Image className={'chassis-icon'} w={250} src={'/assets/chassis/generic_modern_tank.png'}/>
                    </Stack>
                </MenuTrigger>
                <MenuContent>
                    {
                        generateSubCategories("Chassis").map((subCategory) => (
                            <MenuRoot
                                onSelect={(value) => handleClick(value)}
                                key={subCategory}
                                positioning={{ placement: "right-start", gutter: 2, }}
                            >
                                <MenuTriggerItem>{subCategory}</MenuTriggerItem>
                                <MenuContent>
                                    {
                                        filterModulesBySubcategory(subCategory).map((module, index) => (
                                            <MenuItem key={index+module["Part Name"]} value={module["Part Name"]}>
                                                <Image w={5} src={module.Image}/>{module["Part Name"]}
                                            </MenuItem>
                                        ))
                                    }
                                </MenuContent>
                            </MenuRoot>
                        ))
                    }
                </MenuContent>
            </MenuRoot>
        </Box>
    )
}

ChassisSelect.propTypes = {
    activeDesign: PropTypes.object.isRequired,
    updateDesign: PropTypes.func.isRequired
}

export { ChassisSelect }