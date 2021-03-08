
class CalculateSixteen {
  
  // org_ddd: String;
  // dest_ddd: [];
  // minutes: number;

  async calculateValueSixteen(minutes) {
        
      const dest_ddd = ['11'];

      const noPlanValue = {      
        plano_11: (minutes*2.90).toFixed(2),
      };

      const planThirty = {      
        plano_30_11: 0 >= (minutes-30)*(2.90*1.1)? 0 : ((minutes-30)*(2.90*1.1)).toFixed(2),
      };

      const planSixty = {
        plano_60_11: 0 >= (minutes-60)*(2.90*1.1)? 0 : ((minutes-60)*(2.90*1.1)).toFixed(2),
      };
    
      const planOnetwenty = {
        plano_120_11: 0 >= (minutes-120)*(2.90*1.1) ? 0 : ((minutes-120)*(2.90*1.1)).toFixed(2),
      };

      return {dest_ddd, planOnetwenty, planSixty, planThirty, noPlanValue}
  }
}

export { CalculateSixteen };