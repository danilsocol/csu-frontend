import Slide from '../models/slide';
import car from '@Assets/images/s1.png';
import board from '@Assets/images/s2.png';

export default class Data {
    static slides() {
        return [
            new Slide(
                1,
                `Срочная доставка день в день`,
                'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
                car,
                true
            ),
            new Slide(
                2,
                `Подписание договора за 1 час`,
                'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
                board,
                false
            ),
        ];
    }
};