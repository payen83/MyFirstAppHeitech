/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myScore: number = null;
  public grade: string;

  public price: number = null;
  public sst: number = null;
  public sstRate: number = null;
  public finalPrice: number = null;
  
  constructor(public alertController: AlertController) {

    // let cars: Array<any> = ['Persona', 'MyVi', 'Axia'];
    // cars[0] = 'Savvy';

    // // console.log(cars[2]);
    // cars.push('Kancil');

    // // console.log(cars);
    // const fruit: string = cars.pop();
    // console.log(fruit, cars);

    //object:
    // let car: any = { brand: 'Proton', model: 'Axia', color: 'white' };

    // car.model = 'Wira';
    // console.log(car.model, car);

    // let cars = [
    //   { brand: 'Fiat', model: '500', color: 'white' },
    //   { brand: 'Mercedes', model:'A200', color:'red' },
    //   { brand: 'BMW', model:'310i', color: 'yellow' },
    // ];

    // for (let car of cars){
    //   console.log('Brand: ' + car.brand, 'Model: ' + car.model, 
    //   'Color: ' + car.color);
    // }

    // this.myScore = null;
    // this.grade = this.getGrade(this.myScore);
    // let grade: string = this.getGrade(myScore);

    // if (myScore >= 90) {
    //   grade = 'A';
    // } else if (myScore < 90 && myScore >= 70) {
    //   grade = 'B';
    // } else {
    //   grade = 'C';
    // }

    console.log('Your score is ' + this.myScore + '. Your grade is ' + this.getGrade(this.myScore));

  }

  getGrade(myScore: number){
    let grade: string;

    if (myScore >= 90) {
      grade = 'A';
    } else if (myScore < 90 && myScore >= 70) {
      grade = 'B';
    } else {
      grade = 'C';
    }

    return grade;
  }

  btnClick(){
  //  console.log('Score value: ' + this.myScore);
   this.grade = this.getGrade(this.myScore);
  }

  calculateSST(){
    this.sstRate = Number(this.price) * (Number(this.sst)/100);
    this.finalPrice = Number(this.price) + this.sstRate;
    this.presentAlert();
  }

  convertValue(amount: any){
    return (amount).toFixed(2);
  }

  async presentAlert(){
    const message_: string = 'SST Amount is ' + this.convertValue(this.sstRate) +
    '. The final price is ' + this.convertValue(this.finalPrice);

    const alert = await this.alertController.create({
      header: 'SST Calculator',
      message: message_,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
