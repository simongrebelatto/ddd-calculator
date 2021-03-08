
class CalculateSeventeen {
  
  // org_ddd: String;
  // dest_ddd: [];
  // minutes: number;

  async calculateValueSeventeen(minutes) {
    
      const dest_ddd = ['11'];

      const noPlanValue = {      
        plano_11: (minutes*2.70).toFixed(2),
      };

      const planThirty = {      
        plano_30_11: 0 >= (minutes-30)*(2.70*1.1) ? 0 : ((minutes-30)*(2.70*1.1)).toFixed(2),
      };

      const planSixty = {
        plano_60_11: 0 >= (minutes-60)*(2.70*1.1) ? 0 : ((minutes-60)*(2.70*1.1)).toFixed(2),
      };
    
      const planOnetwenty = {
        plano_120_11: 0 >= (minutes-120)*(2.70*1.1) ? 0 : ((minutes-120)*(2.70*1.1)).toFixed(2),
      };

      return {dest_ddd, planOnetwenty, planSixty, planThirty, noPlanValue}
  }
}

export { CalculateSeventeen };