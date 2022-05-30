/**
 * /*
 * Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
import { CoreModule, HOOK_COMPONENTS, RouterModule } from "@c8y/ngx-components";
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from "@c8y/ngx-components/upgrade";
import { AssetsNavigatorModule } from "@c8y/ngx-components/assets-navigator";
import { CockpitDashboardModule } from "@c8y/ngx-components/context-dashboard";
import { ReportsModule } from "@c8y/ngx-components/reports";
import { SensorPhoneModule } from "@c8y/ngx-components/sensor-phone";
import { AdvancedRadialGaugeConfig } from "./src/advanced-radial-gauge/advanced-radial-gauge.config.component";
import { AdvancedRadialGauge } from "./src/advanced-radial-gauge/advanced-radial-gauge.component";
import { DecimalPipe } from "@angular/common";
import * as echarts from "echarts";
import { AngularResizedEventModule } from "angular-resize-event";
import { NgxEchartsModule } from "ngx-echarts";


@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(),
        NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
        CoreModule.forRoot(),
        AssetsNavigatorModule,
        ReportsModule,
        NgUpgradeModule,
        DashboardUpgradeModule,
        CockpitDashboardModule,
        SensorPhoneModule,
        UpgradeModule,
        NgxEchartsModule.forRoot({
            echarts
        }),
        AngularResizedEventModule
    ],
    declarations: [AdvancedRadialGauge, AdvancedRadialGaugeConfig],
    entryComponents: [AdvancedRadialGauge, AdvancedRadialGaugeConfig],
    providers: [
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: [
                {
                    id: "com.softwareag.globalpresales.advanced.radial.gauge",
                    label: "Advanced Radial Gauge",
                    description: "Cumulocity IoT Advanced Radial Gauge Widget",
                    component: AdvancedRadialGauge,
                    configComponent: AdvancedRadialGaugeConfig,
                    previewImage: require("@widget-assets/img-preview.png"),
                    data: {
                        ng1: {
                            options: {
                                noDeviceTarget: false,
                                noNewWidgets: false,
                                deviceTargetNotRequired: false,
                                groupsSelectable: true
                            },
                        }
                    }
                },
            ],
        }
    ]
})
export class AppModule extends HybridAppModule {
    constructor(protected upgrade: NgUpgradeModule) {
        super();
    }
}
