import { Component } from '@angular/core';
 
@Component({
  selector: 'app-about-us',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent {
  title = 'From Our Store to Your Home: The Ultimate Medicine Delivery Experience :)';
  mission = 'The Worldwide Leader in medicine Delivery';
 
  ratings = {
    fiveStar: 93,
    fourStar: 90,
    threeStar: 30,
    twoStar: 5,
    oneStar: 0
  };
 
  stats = {
    happyCustomers: 232,
    items: 121,
    supportHours: 1463,
    hardWorkers: 15
  };
 
  teamMembers = [
    {
      name: 'Aditya Prabhu',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/Aditya Prabhu',
      github: 'https://github.com/Aditya Prabhu',
      linkedin: 'https://www.linkedin.com/in/Aditya Prabhu/'
    },
    {
      name: 'Rajakumari',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/Rajakumari',
      github: 'https://github.com/Rajakumari',
      linkedin: 'https://www.linkedin.com/in/Rajakumari/'
    },
    {
      name: 'Shayam',
      image: 'assets/IMG1.jpg',
      twitter: 'https://twitter.com/Shayam',
      github: 'https://github.com/Shayam',
      linkedin: 'https://www.linkedin.com/in/Shayam/'
    }
  ];
 
  getRatingClass(star: number): string {
    switch (star) {
      case 5:
        return 'bg-success'; // Green for 5 stars
      case 4:
        return 'bg-info'; // Light Blue for 4 stars
      case 3:
        return 'bg-warning'; // Yellow for 3 stars
      case 2:
        return 'bg-danger'; // Red for 2 stars
      case 1:
        return 'bg-secondary'; // Gray for 1 star
      default:
        return '';
    }
  }
}
