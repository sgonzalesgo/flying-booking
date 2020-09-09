import { combineReducers } from "redux";

import flightLocation from "./flightLocation";
import flightMembers from './flightMembers'
import flightDates from './flightDates'

export default combineReducers({ flightLocation, flightMembers, flightDates });
