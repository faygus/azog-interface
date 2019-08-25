import { IMockViewModelJSON } from "../mock-view-model";
import { IViewModelInterfaceJSON } from "../view-model";
import { IViewJSON } from "./view-types";

export type IAppJSON = {
	views: { [id: number]: IViewJSON },
	viewModelInterfaces?: { [id: number]: IViewModelInterfaceJSON },
	mockViewModels?: { [id: number]: IMockViewModelJSON }
}
