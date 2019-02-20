// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'timeSince'
// })
// export class TimeSincePipe implements PipeTransform {

//   transform(timestamp: any, args?: any): any {
//     const timestampDate = new Date(timestamp);
//     const milisecondsPast = new Date(Date.now() - +timestampDate);
//     // Minutes past since timestamp
//     const minutestPast = Math.floor(+milisecondsPast / 60000);
//       // Convert timestamp to milliseconds
//       const date = new Date(timestamp);
//       // Year
//       const year = date.getFullYear();
//       // Month
//       const month = date.getMonth() + 1;
//       // Day
//       const day = date.getDate();
//       // Hours
//       const hours = date.getHours();
//       // Minutes
//       const minutes = '0' + date.getMinutes();
//       // Display date time in MM-dd-yyyy h:m:s format
//       const convdataTime = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes.substr(-2);

//       return convdataTime;
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {

  transform(timestamp: any, args?: any): any {
    const timestampDate = new Date(timestamp);
    const milisecondsPast = new Date(Date.now() - +timestampDate);
    // Minutes past since timestamp
    const minutestPast = Math.floor(+milisecondsPast / 60000);
    if (+milisecondsPast > 0 && minutestPast < 5) {
      return `только что`;
    } else if (minutestPast < 60 && minutestPast >= 5) {
      return `${minutestPast} минут назад`;                   // If past less than 1 hour
    } else if (minutestPast > 60 && minutestPast < 1440) {
      return `${Math.floor(minutestPast / 60)}ч. назад`;      // If past more than 1 hour / less than 1 day
    } else if (minutestPast > 1440) {
      // Convert timestamp to milliseconds                    // If past more than 1 day
      const date = new Date(timestamp);
      // Year
      const year = date.getFullYear();
      // Month
      const month = date.getMonth() + 1;
      // Day
      const day = date.getDate();
      // Hours
      const hours = date.getHours();
      // Minutes
      const minutes = '0' + date.getMinutes();
      // Seconds
      const seconds = '0' + date.getSeconds();
      // Display date time in dd.MM.yyy h:m format
      return `${day}.${month < 10 ? '0' + month : month }.${year} ${hours}:${minutes.substr(-2)}`;
    }
  }
}
