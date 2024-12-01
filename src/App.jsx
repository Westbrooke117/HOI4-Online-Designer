import './App.css'
import {ModuleSelect} from "./components/ModuleSelect.jsx";
import {StatsTable} from "./components/StatsTable.jsx";
import {useState} from "react";
import * as moduleData from './json/modules'
import {Box, Container, HStack, Stack} from "@chakra-ui/react";
import {StatUpgradeInput} from "./components/StatUpgradeInput.jsx";
import {ChassisSelect} from "./components/ChassisSelect.jsx";
import {findModuleByName} from "./utils/findModuleByName.js";

function App() {
    const [activeDesign, setActiveDesign] = useState({
        "Chassis" : findModuleByName("Improved Medium Tank Chassis"),
        "Turret" : findModuleByName("Modern Turret"),
        "Main Armament" : findModuleByName("Advanced Heavy Cannon"),
        "Special Feature Slot 1" : findModuleByName("Advanced Radio"),
        "Special Feature Slot 2" : findModuleByName("Stabilizer"),
        "Special Feature Slot 3" : findModuleByName("Auto Loader"),
        "Special Feature Slot 4" : findModuleByName("Armor Skirts"),
        "Suspension" : findModuleByName("Bogie Suspension"),
        "Armor Type" : findModuleByName("Welded Armor"),
        "Engine Type" : findModuleByName("Gasoline Engine"),
        "Engine Upgrade" : findModuleByName("Engine Upgrade 5"),
        "Armor Upgrade" : findModuleByName("Armor Upgrade 5"),
    });

    const [proposedDesign, setProposedDesign] = useState({
        ...activeDesign,
    })

    const updateDesign = (slotName, module) => {
        module = moduleData.default.find((item) => item["Part Name"] === module);
        console.log(module)

        setActiveDesign({
            ...activeDesign,
            [slotName] : module
        })
    }

    const showChanges = (key, module) => {
        setProposedDesign({
            ...activeDesign,
            [key]: module
        })
    }

  return (
      <Container display={'flex'} justifyContent={'center'}>
          <Stack>
              <HStack gap={0} mt={150} backgroundColor={'rgba(0,0,0,0.85)'} p={10} borderRadius={20}>
                  <Box>
                      <HStack gap={0}>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Turret"} type={"Turrets"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Main Armament"} type={"Armaments"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Special Feature Slot 1"} type={"Special Features"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Special Feature Slot 2"} type={"Special Features"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Special Feature Slot 3"} type={"Special Features"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Special Feature Slot 4"} type={"Special Features"}/>
                      </HStack>
                      <ChassisSelect activeDesign={activeDesign} updateDesign={updateDesign}/>
                      <HStack gap={0}>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Suspension"} type={"Suspension"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Armor Type"} type={"Armor Type"}/>
                          <ModuleSelect activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} label={"Engine Type"} type={"Engine Type"}/>
                          <HStack ml={'auto'} justifyContent={'space-between'}>
                              <StatUpgradeInput activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} upgradeTarget={"Engine"}/>
                              <StatUpgradeInput activeDesign={activeDesign} showChanges={showChanges} updateDesign={updateDesign} upgradeTarget={"Armor"}/>
                          </HStack>
                      </HStack>
                  </Box>
                  <StatsTable activeDesign={activeDesign} proposedDesign={proposedDesign}/>
              </HStack>
          </Stack>
      </Container>
  )
}

export default App
