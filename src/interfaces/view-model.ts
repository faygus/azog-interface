import { TypeJSON } from "./type";

export interface IViewModelInterfaceJSON {
	properties: { [key: string]: TypeJSON };
	inputs?: { [key: string]: TypeJSON };
}
