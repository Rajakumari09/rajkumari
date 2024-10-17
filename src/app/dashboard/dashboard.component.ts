import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  metrics = {
    totalOrders: 50,
    totalCustomers: 50,
    totalRevenue: 2000,
    totalDeliveries: 75,
  };
 
  targetOrders = 150; // Define your target orders here
 
  recentOrders = [
    { id: 1, customer: 'John Doe', amount: 20, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', amount: 15, status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', amount: 30, status: 'Cancelled' },
    { id: 4, customer: 'Alice Brown', amount: 25, status: 'Delivered' },
    { id: 5, customer: 'Mike Wilson', amount: 10, status: 'Pending' },
    { id: 6, customer: 'Sara Connor', amount: 40, status: 'Delivered' },
  ];
 
  ngOnInit() {
    // Any initialization logic can go here
  }
 
  getStatusColor(status: string): string {
    switch (status) {
      case 'Delivered':
        return '#28a745'; // Green
      case 'Pending':
        return '#ffc107'; // Yellow
      case 'Cancelled':
        return '#dc3545'; // Red
      default:
        return '#ffffff'; // Fallback to white
    }
  }
}
 