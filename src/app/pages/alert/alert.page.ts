import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertctrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertctrl.create({
      backdropDismiss: false,
      header: 'Azumaquina',
      subHeader: 'Precausion Exeso de Ricura',
      message: 'Asegurese de entender la ricura en la que se encuantra.',
      buttons: ['OK']
    });

    await alert.present();

  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertctrl.create({
      backdropDismiss: false,
      header: 'Guardar Foto',
      subHeader: 'Peligro de Nudes',
      message: 'Tus nudes podrian ser eliminadas.',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'rojo',
          handler: () => {
            console.log('Se ha Eliminado')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
    ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertctrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data:any ) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

}

