import './style.css';
import Data from './data.csv';


export default {
    render: function () {
        const items = Data.reduce(function (html, user) {
            return html + '<li>' + user.name + ' ' + user.lastname1 + ' ' + user.lastname2 + '</li>';
        }, '');
        return '<ul class="users">' + items + '</ul>';
    }
};