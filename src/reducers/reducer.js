const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const initState = {
  quote: '',
  color: ''
};

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
];



export default (state = initState, action) => {

  const color = colors[Math.floor(Math.random() * 6)];
  switch (action.type) {

    case 'REQUESTING_DATA':
      return state;
    case 'RECEIVED_DATA':
      return {
        ...state,
        quote: action.quote,
        color: color
      }
    default:
      return state;
  }
};