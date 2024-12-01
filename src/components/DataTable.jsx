import {Table} from "@chakra-ui/react";
import * as moduleData from '../json/modules'
import PropTypes from "prop-types";

const DataTable = ({activeDesign}) => {
    const columnWhitelist = ["Part Name", "Module Slot", "Soft Attack", "Hard Attack Base", "Hard Attack %", "Armor Base", "Armor %"]

    return (
        <Table.Root variant={'outline'} size={'sm'} borderRadius={5}>
            <Table.Header>
                <Table.Row>
                    {
                        Object.keys(moduleData.default[0]).filter((module) => columnWhitelist.includes(module)).map((module, index) => (
                            <Table.ColumnHeader key={index+module["Part Name"]}>{module}</Table.ColumnHeader>
                        ))
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    Object.values(activeDesign).map((module, index) => (
                        module !== null ?
                            <Table.Row key={index+module["Part Name"]}>
                                {
                                    columnWhitelist.map((entry, index) => (
                                        <Table.Cell key={index}>{module[entry]}</Table.Cell>
                                    ))
                                }
                            </Table.Row>
                            :
                            <></>
                    ))
                }
            </Table.Body>
        </Table.Root>
    )
}

DataTable.propTypes = {
    activeDesign: PropTypes.object.isRequired,
}

export { DataTable }