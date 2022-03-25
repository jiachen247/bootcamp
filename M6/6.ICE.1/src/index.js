import moment from 'moment';

const input = document.getElementById('customDate')
const log = document.getElementById('dateResult')

input.addEventListener('input', updateValue)

function updateValue(e) {
    log.textContent = moment(e.target.value).format('MMMM, Do YYYY');
}
