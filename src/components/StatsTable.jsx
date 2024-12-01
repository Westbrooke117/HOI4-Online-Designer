import {useEffect, useState} from "react";
import {CalculateReliability, CalculateStat, CalculateStatWithPercentage} from "../utils/calculateStats.js";
import {Table} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {StatCell} from "./StatCell.jsx";

const StatsTable = ({activeDesign, proposedDesign}) => {
    const [stats, setStats] = useState({});
    const [proposedStats, setProposedStats] = useState({});

    useEffect(() => {
        setProposedStats({
            ...proposedStats,
            maxSpeed: CalculateStatWithPercentage(proposedDesign, "Max Speed Base", "Max Speed %"),
            softAttack: CalculateStat(proposedDesign, "Soft Attack"),
            fuelUsage: CalculateStat(proposedDesign, "Fuel Usage"),
            reliability: CalculateReliability(proposedDesign),
            hardAttack: CalculateStatWithPercentage(proposedDesign, "Hard Attack Base", "Hard Attack %"),
            entrenchment: CalculateStat(proposedDesign, "Entrenchment"),
            piercing: CalculateStatWithPercentage(proposedDesign, "Piercing", "Piercing %"),
            hardness: CalculateStat(proposedDesign, "Hardness"),
            armor: CalculateStatWithPercentage(proposedDesign, "Armor Base", "Armor %"),
            breakthrough: CalculateStatWithPercentage(proposedDesign, "Breakthrough Base", "Breakthrough %"),
            defense: CalculateStatWithPercentage(proposedDesign, "Defense Base", "Defense %"),
            airAttack: CalculateStat(proposedDesign, "Air Attack"),
        })
    },[proposedDesign])

    useEffect(() => {
        setStats({
            ...stats,
            maxSpeed: CalculateStatWithPercentage(activeDesign, "Max Speed Base", "Max Speed %"),
            softAttack: CalculateStat(activeDesign, "Soft Attack"),
            fuelUsage: CalculateStat(activeDesign, "Fuel Usage"),
            reliability: CalculateReliability(activeDesign),
            hardAttack: CalculateStatWithPercentage(activeDesign, "Hard Attack Base", "Hard Attack %"),
            entrenchment: CalculateStat(activeDesign, "Entrenchment"),
            piercing: CalculateStatWithPercentage(activeDesign, "Piercing", "Piercing %"),
            hardness: CalculateStat(activeDesign, "Hardness"),
            armor: CalculateStatWithPercentage(activeDesign, "Armor Base", "Armor %"),
            breakthrough: CalculateStatWithPercentage(activeDesign, "Breakthrough Base", "Breakthrough %"),
            defense: CalculateStatWithPercentage(activeDesign, "Defense Base", "Defense %"),
            airAttack: CalculateStat(activeDesign, "Air Attack"),
        })
    },[activeDesign]);

    return (
        <Table.Root variant={'outline'} size={'sm'} ml={10} borderRadius={5}>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader minW={60} maxW={60}>Base Stats</Table.ColumnHeader>
                    <Table.ColumnHeader minW={60} maxW={60}>Combat Stats</Table.ColumnHeader>
                    <Table.ColumnHeader minW={60} maxW={60}>Misc. Stats</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <StatCell label={'Max Speed'} activeStatValue={`${stats.maxSpeed}km/h`} proposedStatValue={`${proposedStats.maxSpeed}km/h`}/>
                    <StatCell label={'Soft Attack'} activeStatValue={stats.softAttack} proposedStatValue={proposedStats.softAttack}/>
                    <StatCell label={'Fuel Usage'} activeStatValue={stats.fuelUsage} proposedStatValue={proposedStats.fuelUsage}/>
                </Table.Row>
                <Table.Row>
                    <StatCell label={'Reliability'} activeStatValue={`${stats.reliability}%`} proposedStatValue={`${proposedStats.reliability}%`}/>
                    <StatCell label={'Hard Attack'} activeStatValue={stats.hardAttack} proposedStatValue={proposedStats.hardAttack}/>
                    <StatCell label={'Entrenchment'} activeStatValue={stats.entrenchment} proposedStatValue={proposedStats.entrenchment}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Piercing'} activeStatValue={stats.piercing} proposedStatValue={proposedStats.piercing}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Hardness'} activeStatValue={stats.hardness} proposedStatValue={proposedStats.hardness}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Armor'} activeStatValue={stats.armor} proposedStatValue={proposedStats.armor}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Breakthrough'} activeStatValue={stats.breakthrough} proposedStatValue={proposedStats.breakthrough}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Defense'} activeStatValue={stats.defense} proposedStatValue={proposedStats.defense}/>
                </Table.Row>
                <Table.Row>
                    <Table.Cell/>
                    <StatCell label={'Air Attack'} activeStatValue={stats.airAttack} proposedStatValue={proposedStats.airAttack}/>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    )
}

StatsTable.propTypes = {
    activeDesign: PropTypes.object.isRequired,
    proposedDesign: PropTypes.object.isRequired
}

export { StatsTable }