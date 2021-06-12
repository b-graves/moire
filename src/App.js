import logo from './logo.svg';
import './App.css';
import Pattern from './components/Pattern';
import Moire from './components/Moire';

import React, { useState, } from "react";

import { Grommet, Box, Button, Grid, Text, Heading } from 'grommet';
import { grommet } from 'grommet/themes';

import { Close, Menu } from "grommet-icons";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const [spin, setSpin] = useState(true);
  const [sideways, setSideways] = useState(false);
  const [upAndDown, setUpAndDown] = useState(false)

  const [speed, setSpeed] = useState("medium");
  const [variant, setVariant] = useState("lines");
  const [orientation, setOrientation] = useState("horizontal")


  const [color, setColor] = useState("black")

  const [size, setSize] = useState("medium");

  let width, height, strokeWidth;

  switch (size) {
    case "very small":
      width = 2;
      height = 2;
      strokeWidth = 1;
      break;
    case "small":
      width = 4;
      height = 4;
      strokeWidth = 2;
      break;
    case "medium":
      width = 8;
      height = 8;
      strokeWidth = 4;
      break;

    case "big":
      width = 12;
      height = 12;
      strokeWidth = 6;
      break;

    case "very big":
      width = 20;
      height = 20;
      strokeWidth = 10;
      break;
    default:
      width = 8;
      height = 8;
      strokeWidth = 4;
  }



  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >


        <Box
          gridArea="sidebar"
          size="large"
          animation={[
            { type: 'fadeIn', duration: 300 },
            { type: 'slideRight', size: 'xlarge', duration: 150 }
          ]}

        >
          <Button margin="xsmall" onClick={() => setSidebar(!sidebar)} icon={sidebar ? <Close /> : <Menu />}></Button>
          {sidebar && <>
            <Box >
              <Heading margin="xsmall" level="4" >Pattern</Heading>
              <Box direction="row" wrap
              >
                <Button margin="xsmall" size="small" primary={variant === "lines"} secondary={variant !== "lines"} onClick={() => setVariant("lines")} label="Lines"></Button>

                <Button margin="xsmall" size="small" primary={variant === "circles"} secondary={variant !== "circles"} onClick={() => setVariant("circles")} label="Dots"></Button>

                <Button margin="xsmall" size="small" primary={variant === "waves"} secondary={variant !== "waves"} onClick={() => setVariant("waves")} label="Wiggles"></Button>
              </Box>
            </Box>

            <Box >
              <Heading margin="xsmall" level="4" >Speed</Heading>
              <Box direction="row" wrap
              >
                <Button margin="xsmall" size="small" primary={size === "very big"} secondary={size !== "very big"} onClick={() => setSize("very big")} label="Very Big"></Button>

                <Button margin="xsmall" size="small" primary={size === "big"} secondary={size !== "big"} onClick={() => setSize("big")} label="Big"></Button>

                <Button margin="xsmall" size="small" primary={size === "medium"} secondary={size !== "medium"} onClick={() => setSize("medium")} label="Medium"></Button>

                <Button margin="xsmall" size="small" primary={size === "small"} secondary={size !== "small"} onClick={() => setSize("small")} label="Small"></Button>

                <Button margin="xsmall" size="small" primary={size === "very small"} secondary={size !== "very small"} onClick={() => setSize("very small")} label="Very Small"></Button>
              </Box>
            </Box>


            {variant === "lines" && <Box >
              <Heading margin="xsmall" level="4" >Orientation</Heading>
              <Box direction="row" wrap
              >
                <Button margin="xsmall" size="small" primary={orientation === "horizontal"} secondary={orientation !== "horizontal"} onClick={() => setOrientation("horizontal")} label="Horizontal"></Button>

                <Button margin="xsmall" size="small" primary={orientation === "vertical"} secondary={orientation !== "vertical"} onClick={() => setOrientation("vertical")} label="Vertical"></Button>

                <Button margin="xsmall" size="small" primary={orientation === "diagonal"} secondary={orientation !== "diagonal"} onClick={() => setOrientation("diagonal")} label="Diagonal"></Button>
              </Box>
            </Box>}

            <Box >
              <Heading margin="xsmall" level="4" >Movement</Heading>
              <Box direction="row" wrap
              >
                <Button margin="xsmall" size="small" primary={spin} secondary={!spin} onClick={() => setSpin(!spin)} label="Spin"></Button>
                <Button margin="xsmall" size="small" primary={sideways} secondary={!sideways} onClick={() => setSideways(!sideways)} label="Side To Side"></Button>
                <Button margin="xsmall" size="small" primary={upAndDown} secondary={!upAndDown} onClick={() => setUpAndDown(!upAndDown)} label="Up And Down"></Button>
              </Box>
            </Box>

            <Box >
              <Heading margin="xsmall" level="4" >Speed</Heading>
              <Box direction="row" wrap
              >
                <Button margin="xsmall" size="small" primary={speed === "very fast"} secondary={speed !== "very fast"} onClick={() => setSpeed("very fast")} label="Very Fast"></Button>

                <Button margin="xsmall" size="small" primary={speed === "fast"} secondary={speed !== "fast"} onClick={() => setSpeed("fast")} label="Fast"></Button>

                <Button margin="xsmall" size="small" primary={speed === "medium"} secondary={speed !== "medium"} onClick={() => setSpeed("medium")} label="Medium"></Button>

                <Button margin="xsmall" size="small" primary={speed === "slow"} secondary={speed !== "slow"} onClick={() => setSpeed("slow")} label="Slow"></Button>

                <Button margin="xsmall" size="small" primary={speed === "very slow"} secondary={speed !== "very slow"} onClick={() => setSpeed("very slow")} label="Very Slow"></Button>
              </Box>
            </Box>
          </>}

        </Box>

        <Box gridArea="main" justify="center" align="center">
          <Moire spin={spin} sideways={sideways} upAndDown={upAndDown} variant={variant} speed={speed} orientation={orientation} width={variant === "lines" && orientation === "diagonal" ? width * 1.5 : width} height={variant === "lines" && orientation === "diagonal" ? height * 1.5 : height} strokeWidth={variant === "waves" ? strokeWidth / 2 : strokeWidth} color={color} />
        </Box>
      </Grid>
    </Grommet >
  );
}

export default App;
