import { CalculateSixteen } from "../class/CalculateSixteen";

async function calculateSixteen(org_ddd, minutes) {

  const planClass = new CalculateSixteen();

  const plan = await planClass.calculateValueSixteen(minutes);
  
  const html = 
  `
  <table>
    <tr>
      <th>DDD de Origem</th>
      <th>DDD de Destino</th>
      <th>Minutos</th>
      <th>Sem Plano</th>
      <th>Plano FaleMais30</th>
      <th>Plano FaleMais60</th>
      <th>Plano FaleMais120</th>
    </tr>
    <tr>
      <td>${org_ddd}</td>
      <td>${plan.dest_ddd[0]}</td>
      <td>${minutes}</td>
      <td>$${plan.noPlanValue.plano_11}</td>
      <td>$${plan.planThirty.plano_30_11}</td>
      <td>$${plan.planSixty.plano_60_11}</td>
      <td>$${plan.planOnetwenty.plano_120_11}</td>
    </tr>
  </table>
  `;

  const resHTML = document.querySelector('.calculate_table').innerHTML = html;

  return resHTML;

}

export { calculateSixteen }