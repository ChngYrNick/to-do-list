import { combineReducers } from "redux";

import me from "./me";
import modal from "./modal";
import inputModal from "./inputModal";

export default combineReducers({ me, modal, inputModal });
