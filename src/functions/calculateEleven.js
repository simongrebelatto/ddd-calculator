import { CalculateEleven } from "../class/CalculateEleven";


async function calculateEleven(org_ddd, minutes) {
  
  const planClass = new CalculateEleven();

  const plan = await planClass.calculateValueEleven(minutes);


  const html = 
   `<table>
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
        <td>$${plan.noPlanValue.plano_16}</td>
        <td>$${plan.planThirty.plano_30_16}</td>
        <td>$${plan.planSixty.plano_60_16}</td>
        <td>$${plan.planOnetwenty.plano_120_16}</td>
      </tr>
      <tr>
        <td>${org_ddd}</td>
        <td>${plan.dest_ddd[1]}</td>
        <td>${minutes}</td>
        <td>$${plan.noPlanValue.plano_17}</td>
        <td>$${plan.planThirty.plano_30_17}</td>
        <td>$${plan.planSixty.plano_60_17}</td>
        <td>$${plan.planOnetwenty.plano_120_17}</td>
      </tr>
      <tr>
        <td>${org_ddd}</td>
        <td>${plan.dest_ddd[2]}</td>
        <td>${minutes}</td>
        <td>$${plan.noPlanValue.plano_18}</td>
        <td>$${plan.planThirty.plano_30_18}</td>
        <td>$${plan.planSixty.plano_60_18}</td>
        <td>$${plan.planOnetwenty.plano_120_18}</td>
      </tr>
  </table>`

  const resHTML = document.querySelector('.calculate_table').innerHTML = html;

  return resHTML;
  
}

export { calculateEleven };