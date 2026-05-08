import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { LucideCircleDollarSign, LucideFileText, LucideUsers, LucideDynamicIcon, LucideTrendingUp, LucideArrowUpRight } from '@lucide/angular';

@Component({
  selector: 'app-dashboard-mockup',
  imports: [NgClass, LucideDynamicIcon, LucideTrendingUp, LucideArrowUpRight],
  templateUrl: './dashboard-mockup.html',
  styleUrl: './dashboard-mockup.css',
})
export class DashboardMockup {
  public bars = [38, 62, 49, 78, 55, 88, 72, 95, 68, 84, 92, 76];
  public bars0 = [40, 60, 35, 80, 55, 90, 72];
  public menuBars = [
    'Dashboard',
    'Invoices',
    'Customers',
    'Estimates',
    'Reports',
    'Settings',
  ];
  public kpiCards = [
    {
      label: 'Revenue',
      value: '$48,210',
      delta: '+12.4%',
      icon: LucideCircleDollarSign,
    },
    { label: 'Invoices', value: '1,284', delta: '+5.2%', icon: LucideFileText },
    { label: 'Customers', value: '432', delta: '+8.1%', icon: LucideUsers },
  ];
  public invoiceRows = [
    { id: '#INV-1042', name: 'Northwind Co.', amt: '$2,400', status: 'Paid' },
    { id: '#INV-1041', name: 'Acme Studio', amt: '$890', status: 'Pending' },
    { id: '#INV-1040', name: 'Lumen Labs', amt: '$5,120', status: 'Paid' },
  ];
}
