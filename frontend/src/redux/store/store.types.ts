import { Store } from "redux";
import { IApplicationState } from "../ApplicationState";

export type ConfigureStoreType = () => Store<IApplicationState>;
