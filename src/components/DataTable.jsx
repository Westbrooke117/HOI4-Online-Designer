import { Table } from "@chakra-ui/react";
import * as moduleData from '../json/modules';
import PropTypes from "prop-types";

const DataTable = ({ activeDesign }) => {
    // Extract all keys dynamically from the first module as columns
    const columnBlacklist = ['Image', 'Hard Attack', 'Breakthrough', 'armor', 'Anti-Air Role Allowed', 'Amphibious Role Allowed', 'Amphibious Tank', 'Artillery Role Allowed', 'Tank Destroyer Role Allowed', 'Light Tank Role Allowed', 'Medium Tank Role Allowed', 'Heavy Tank Role Allowed', 'Super Heavy Tank Role Allowed', 'Modern Tank Role Allowed', 'Flames(Support Company) Role Allowed']
    const columnWhitelist = Object.keys(moduleData.default[0]).filter(
        (column) => !columnBlacklist.includes(column));

    return (
        <Table.Root variant={'outline'} size={'sm'} borderRadius={5}>
            <Table.Header>
                <Table.Row>
                    {columnWhitelist.map((key, index) => (
                        <Table.ColumnHeader whiteSpace={'nowrap'} key={index}>{key}</Table.ColumnHeader>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Object.values(activeDesign).map((module, rowIndex) =>
                    module !== null ? (
                        <Table.Row key={rowIndex + (module["Part Name"] || "Unnamed")}>
                            {columnWhitelist.map((key, colIndex) => {
                                const cellValue = module[key];

                                return (
                                    <Table.Cell whiteSpace={'nowrap'} key={colIndex}>
                                        {typeof cellValue === "object" && cellValue !== null
                                            ? JSON.stringify(cellValue) // Convert objects to JSON strings
                                            : cellValue ?? "N/A" // Handle undefined/null values
                                        }
                                    </Table.Cell>
                                );
                            })}
                        </Table.Row>
                    ) : null
                )}
            </Table.Body>
        </Table.Root>
    );
};

DataTable.propTypes = {
    activeDesign: PropTypes.object.isRequired,
};

export { DataTable };
