import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report.service';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-quick-panel-offcanvas',
  templateUrl: './quick-panel-offcanvas.component.html',
  styleUrls: ['./quick-panel-offcanvas.component.scss'],
})
export class QuickPanelOffcanvasComponent implements OnInit {

  public latestReports: any = []
  extrasQuickPanelOffcanvasDirectionCSSClass = 'offcanvas-right';
  activeTabId:
    | 'kt_quick_panel_logs'
    | 'kt_quick_panel_notifications'
    | 'kt_quick_panel_settings' = 'kt_quick_panel_logs';

  constructor(private layout: LayoutService, private _reportService: ReportService, private cf: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.quickPanel.offcanvas.direction'
    )}`;
    this.getLatestReports();
  }

  getLatestReports() {
    this.setActiveTabId('kt_quick_panel_notifications')
    let userId = localStorage.getItem('clubUid');
    this._reportService.getLatestReports(userId).subscribe((reports: any) => {
      reports.map((singleReport: any) => {
        let time = new Date(singleReport.postedTime).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        singleReport.time = time;
      });
      this.latestReports = reports;
      this.cf.detectChanges();
    })
  }

  setActiveTabId(tabId) {
    debugger;
    this.activeTabId = tabId;
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return '';
    }
    return 'active show';
  }
}
