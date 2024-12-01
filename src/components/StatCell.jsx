import {
    Box,
    HStack,
    Image,
    Stat,
    StatDownIndicator,
    StatRoot,
    StatUpIndicator,
    StatValueText,
    Table
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {StatDownTrend, StatLabel, StatUpTrend} from "./ui/stat.jsx";

const StatCell = ({label, activeStatValue, proposedStatValue, imageURL}) => {

    const percentageStatChange = ((parseFloat(proposedStatValue) - parseFloat(activeStatValue) ) / parseFloat(activeStatValue)) * 100

    return (
        <Table.Cell>
            {
                activeStatValue === proposedStatValue ?
                    <StatRoot>
                        <HStack mb={-1} mt={-1} justifyContent={'space-between'}>
                            <StatLabel mr={5} whiteSpace={'nowrap'} color={'white'}>{label}:</StatLabel>
                            <StatValueText whiteSpace={'nowrap'} fontWeight={'normal'} fontSize={14}>{activeStatValue}</StatValueText>
                        </HStack>
                    </StatRoot>
                    :
                    <StatRoot>
                        <HStack mb={-1} mt={-1} justifyContent={'space-between'}>
                            <StatLabel mr={5} whiteSpace={'nowrap'} color={'white'}>{label}:</StatLabel>
                            <Box whiteSpace={'nowrap'}>
                                {
                                    percentageStatChange < 0 ?
                                        <StatDownTrend>{Math.floor(percentageStatChange)}%</StatDownTrend>
                                        :
                                        <StatUpTrend>{Math.floor(percentageStatChange)}%</StatUpTrend>
                                }
                                <StatValueText ml={2} whiteSpace={'nowrap'} fontWeight={'normal'} fontSize={14}>{proposedStatValue}</StatValueText>
                            </Box>
                        </HStack>
                    </StatRoot>
            }
        </Table.Cell>
    )
}

StatCell.propTypes = {
    activeStatValue: PropTypes.string.isRequired,
    proposedStatValue: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
}

export { StatCell }