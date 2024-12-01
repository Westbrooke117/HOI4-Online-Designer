import {filterModules, filterModulesBySubcategory} from "../utils/filterModules.js";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem} from "./ui/menu.jsx";
import {Button, Image} from "@chakra-ui/react";
import {useCallback, useState} from "react";
import {findModuleByName} from "../utils/findModuleByName.js";
import {Tooltip} from "./ui/tooltip.jsx";
import {generateSubCategories} from "../utils/generateSubCategories.js";
import PropTypes from "prop-types";
import {debounce} from "lodash";

const ModuleSelect = ({activeDesign, updateDesign, label, type, showChanges}) => {
    const [selectedModuleName, setSelectedModuleName] = useState("");

    const handleClick = (module) => {
        setSelectedModuleName(module.value);
        updateDesign(label, module.value)
    }

    const attemptToLoadImage = () => {
        return activeDesign[label] === null ?
            <Image h={11} alt={selectedModuleName} src={findModuleByName(selectedModuleName).Image}/>
            :
            <Image h={11} alt={activeDesign[label]["Part Name"]} src={activeDesign[label]["Image"]}/>
    }

    const debouncedShowChanges = useCallback(
        debounce((key, module) => {
            showChanges(key, module);
        }, 100), // Adjust debounce delay as needed
        [showChanges]
    );

    const handleHover = (module) => {
        debouncedShowChanges(label, module)
    }

    return (
        <MenuRoot positioning={{placement:'bottom'}} onSelect={(value) => handleClick(value)}>
            <MenuTrigger>
                <Tooltip content={activeDesign[label]["Part Name"]} openDelay={0} closeDelay={0}>
                    <Button w={100} h={14} variant={'surface'} textWrap={'wrap'}>
                        {
                            attemptToLoadImage()
                        }
                    </Button>
                </Tooltip>
            </MenuTrigger>
            <MenuContent mt={-1} overflowY={'scroll'} maxH={200}>
                {
                    generateSubCategories(type).length > 1 ?
                        generateSubCategories(type).map((subCategory) => (
                            <MenuRoot
                                onSelect={(value) => handleClick(value)}
                                key={subCategory}
                                positioning={{ placement: "right-start", gutter: 2, }}
                            >
                                <MenuTriggerItem>{subCategory}</MenuTriggerItem>
                                <MenuContent>
                                    {
                                        filterModulesBySubcategory(subCategory).map((module, index) => (
                                            <MenuItem onMouseEnter={() => handleHover(module)} key={index+module["Part Name"]} value={module["Part Name"]}>
                                                <Image w={5} src={module.Image}/>{module["Part Name"]}
                                            </MenuItem>
                                        ))
                                    }
                                </MenuContent>
                            </MenuRoot>
                        ))
                        :
                        filterModules(type).map((module, index) => (
                            <MenuItem onMouseEnter={() => handleHover(module)} key={index+module["Part Name"]} value={module["Part Name"]}>
                                <Image w={5} src={module.Image}/>{module["Part Name"]}
                            </MenuItem>
                        ))
                }
            </MenuContent>
        </MenuRoot>
    )
}

ModuleSelect.propTypes = {
    activeDesign: PropTypes.object.isRequired,
    updateDesign: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    showChanges: PropTypes.func
}

export {ModuleSelect}