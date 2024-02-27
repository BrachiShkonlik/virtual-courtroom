import { combineReducers } from "redux";
import PanelReducer from "./PanelReducer";
import MergedDataReducer from "./MergedDataReducer";
import ZoomReducer from './ZoomReducer';

export const allReducers = combineReducers({
    PanelReducer : PanelReducer ,
    MergedDataReducer : MergedDataReducer, 
    ZoomReducer : ZoomReducer 
})