import Slide from '../Models/Slide';
import Service from '../Models/Service';
import car from '@Assets/images/s1.png';
import board from '@Assets/images/s2.png';
import Icon1 from '@Assets/images/ico1.svg';
import Icon2 from '@Assets/images/ico2.svg';
import Icon3 from '@Assets/images/ico3.svg';
import Icon4 from '@Assets/images/ico4.svg';
import Icon5 from '@Assets/images/ico5.svg';
export default class Data {
    static slides() {
        return [
            new Slide(
                0,
                `Срочная доставка день в день`,
                'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
                car,
                true
            ),
            new Slide(
                1,
                `Подписание договора за 1 час`,
                'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
                board,
                false
            ),
        ];
    }
    static services() {
        return [
            new Service(
                0,
                'Расчетать стоимость',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon1
            ),
            new Service(
                1,
                'Вызвать курьера',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon2
            ),
            new Service(
                2,
                'Оплатить услуги',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon3
            ),
            new Service(
                3,
                'Заключить договор',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon4
            ),
            new Service(
                4,
                'Предоставить данные',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.',
                Icon5
            ),
        ];
    }
}
