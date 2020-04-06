import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    amount: 123,
    note: '',
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    amount: 13324,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    amount: 34554,
    note: '',
    createdAt: moment(0).add(4,'days').valueOf()
}];