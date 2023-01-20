import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import ChalkJotto from "./components/ChalkJotto";
import MapOfReddit from "./components/MapOfReddit";
import CaptainMarkov from "./components/CaptainMarkov";
import ConfidentlyIncorrect from "./components/ConfidentlyIncorrect";
import DoctorMarkov from "./components/DoctorMarkov";
import FoodRescue from "./components/FoodRescue";
import PickupScheduler from "./components/PickupScheduler";
import PaperclipMaximizer from "./components/PaperclipMaximizer";
import LiveBusMap from "./components/LiveBusMap";
import VinScanner from "./components/VinScanner";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <DataObjectIcon sx={{marginRight: 2}}/>
          <Link className="scaleOnHover" to="/" style={{textDecoration: 'none'}}>
            <Typography variant="h6" color="white" noWrap>
              Lars Benedetto's Projects
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog/ConfidentlyIncorrect" element={<ConfidentlyIncorrect/>}/>
          <Route path="/blog/ChalkJotto" element={<ChalkJotto/>}/>
          <Route path="/blog/DoctorMarkov" element={<DoctorMarkov/>}/>
          <Route path="/blog/FoodRescue" element={<FoodRescue/>}/>
          <Route path="/blog/PickupScheduler" element={<PickupScheduler/>}/>
          <Route path="/blog/PaperclipMaximizer" element={<PaperclipMaximizer/>}/>
          <Route path="/blog/LiveBusMap" element={<LiveBusMap/>}/>
          <Route path="/blog/VinScanner" element={<VinScanner/>}/>
          <Route path="/blog/MapOfReddit" element={<MapOfReddit/>}/>
          <Route path="/blog/CaptainMarkov" element={<CaptainMarkov/>}/>
        </Routes>
      </main>
    </ThemeProvider>
  );
}
