import { calculateEleven } from '../functions/calculateEleven';
import { calculateSixteen } from '../functions/calculateSixteen';
import { calculateSeventeen } from '../functions/calculateSeventeen';
import { calculateEighteen} from '../functions/calculateEighteen';
 
function receiveData() {
  
  const org_ddd = String(document.querySelector('.origin_ddd').value);
  const minutes = Number(document.querySelector('.minutes_call').value);

  if (org_ddd === 'default') {
    return alert('Por favor inclua um DDD válido')
  }
  else if (minutes === 0 || null) {
    return alert('Por favor inclua os minutos de ligação')
  } 
  else  if ( org_ddd === '11') {
    calculateEleven(org_ddd, minutes);
  } 
  else if (org_ddd === '16')  {
    calculateSixteen(org_ddd, minutes);
  }
  else if (org_ddd === '17') {
    calculateSeventeen(org_ddd, minutes);
  }
  else if (org_ddd === '18') {
    calculateEighteen(org_ddd, minutes);
  }
}

export { receiveData }