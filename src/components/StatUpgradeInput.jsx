import {Text, VStack} from "@chakra-ui/react";
import {StepperInput} from "./ui/stepper-input.jsx";
import PropTypes from "prop-types";

const StatUpgradeInput = ({activeDesign, upgradeTarget, updateDesign}) => {
    const HandleClick = (value) => {
        updateDesign(`${upgradeTarget} Upgrade`, `${upgradeTarget} Upgrade ${value}`)
    }

    const currentLevel = parseInt(activeDesign[`${upgradeTarget} Upgrade`]["Part Name"].match('(\\d)')[0])

    return (
        <VStack gap={0}>
            <Text>{upgradeTarget}</Text>
            <StepperInput onValueChange={(e) => HandleClick(e.value)} min={0} max={20} defaultValue={currentLevel} />
        </VStack>
    )
}

StatUpgradeInput.propTypes = {
    activeDesign: PropTypes.object.isRequired,
    upgradeTarget: PropTypes.string.isRequired,
    updateDesign: PropTypes.func.isRequired,
}

export { StatUpgradeInput }