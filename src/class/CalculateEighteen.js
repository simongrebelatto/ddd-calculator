
class CalculateEighteen {
  
  // org_ddd: String;
  // dest_ddd: [];
  // minutes: number;

  async calculateValueEighteen(minutes) {
    
      const dest_ddd = ['11'];

      const noPlanValue = {      
        plano_11: (minutes*1.90).toFixed(2),
      };

      const planThirty = {      
        plano_30_11: 0 >= (minutes-30)*(1.90*1.1) ? 0 : ((minutes-30)*(1.90*1.1)).toFixed(2),
      };

      const planSixty = {
        plano_60_11: 0 >= (minutes-60)*(1.90*1.1) ? 0 : ((minutes-60)*(1.90*1.1)).toFixed(2),
      };
    
      const planOnetwenty = {
        plano_120_11: 0 >= (minutes-120)*(1.90*1.1) ? 0 : ((minutes-120)*(1.90*1.1)).toFixed(2),
      };
      
      return {dest_ddd, planOnetwenty, planSixty, planThirty, noPlanValue};
  }
}

export { CalculateEighteen };