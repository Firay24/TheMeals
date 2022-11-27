import './style/style.css';
import './script/component/app-bar.js'
import main from './script/view/main.js';
import './script/component/app-footer.js'
import './style/style.css';
import $ from 'jquery';
import moment from 'moment';

const displayTime = () => {
    moment.locale('id');
    $('.time').text(moment().format('LTS'));
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};

updateTime();
main();
