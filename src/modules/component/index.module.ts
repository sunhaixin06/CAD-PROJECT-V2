// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IndexPageRoutingModule } from './index.module.routes';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ComboBoxModule, DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DatePickerModule, DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { IndexPageComponent } from './index/index.component';
import { ChatListComponent } from './chatList/chatList.component';
import { PoliceListComponent } from './policeList/policeList.component';
import { PoliceDetailComponent } from './policeDetail/policeDetail.component';
import { LeftPhoneComponent } from './leftPhone/leftPhone.component';
import { HistoryWarnComponent } from './leftPhone/history-warn/historyWarn.component';
import { SecretInfoComponent } from './leftPhone/secretInfo/secretInfo.component';
import { LeftUserComponent } from './leftUser/leftUser.component';
import { UnSaveComponent } from './leftUser/un-save/unSave.component';
import { QueueListComponent } from './leftUser/queueList/queueList.component';
import { ChatPageComponent } from './chatPage/chatPage.component';
import { HeaderComponent } from './header/header.component';
import { EditPoliceComponent } from './editPolice/editPolice.component';
import { PoliceDisposeComponent } from './editPolice/policeDispose/policeDispose.component';
import { SelectedUnitsComponent } from './editPolice/policeDispose/selectedUnits/selectedUnits.component';
import { DateRangeFilterComponent } from './policeList/kendo/dateRangeFilter/date-range-filter.component';
import { MultiCheckFilterComponent } from './policeList/kendo/multicheckFilter/multicheck-filter.component';
import { PoliceRelatedComponent } from './editPolice/policeRelated/policeRelated.component';
import { PoliceRuleComponent } from './editPolice/policeRule/policeRule.component';
import { PoliceCellComponent } from './editPolice/policeDispose/policeCell/policeCell.component';
import { PoliceUnitsComponent } from './editPolice/policeDispose/policeUnits/policeUnits.component';
import { DropdownCommonComponent } from './common/dropdown/dropdown.component';
import { PopupCancelComponent } from './popup/popupCancel.component';
import { PopupFeedbackComponent } from './popup/popupFeedback/popupFeedback.component';
import { PopupTakeoverComponent } from './popup/popupTakeover/popupTakeover.component';
import { PopupMaillistComponent } from './popup/popupMaillist/popupMaillist.component';
import { PopupBlacklistComponent  } from "./popup/popupBlacklist/popupBlacklist.component";


import {DqjqComponent} from './policeList/dqjq/dqjq.component';
import {LsjqComponent} from './policeList/lsjq/lsjq.component';
import {WdjqComponent} from './policeList/wdjq/wdjq.component';



@NgModule({
  declarations: [
    IndexPageComponent,
    ChatListComponent,
    PoliceListComponent,
    PoliceDetailComponent,
    LeftPhoneComponent,
    HistoryWarnComponent,
    SecretInfoComponent,
    LeftUserComponent,
    UnSaveComponent,
    QueueListComponent,
    ChatPageComponent,
    HeaderComponent,
    EditPoliceComponent,
    PoliceDisposeComponent,
    SelectedUnitsComponent,
    DateRangeFilterComponent,
    MultiCheckFilterComponent,
    PoliceRelatedComponent,
    PoliceRuleComponent,
    PoliceCellComponent,
    PoliceUnitsComponent,
    DropdownCommonComponent,
    DqjqComponent,
    LsjqComponent,
    WdjqComponent,
    PopupCancelComponent,
    PopupFeedbackComponent,
    PopupTakeoverComponent,
    PopupMaillistComponent,
    PopupBlacklistComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    IndexPageRoutingModule,
    GridModule,
    ComboBoxModule,
    DropDownListModule,
    DateInputsModule,
    DatePickerModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [IndexPageComponent]
})
export class IndexModule { }
