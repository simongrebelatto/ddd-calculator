
class CalculateEleven {
  
  // org_ddd: String;
  // dest_ddd: [];
  // minutes: number;

  async calculateValueEleven(minutes) {
    
      const dest_ddd = ['16', '17', '18'];

      const noPlanValue = {      
        plano_16: (minutes*1.90).toFixed(2),
        plano_17: (minutes*1.70).toFixed(2),
        plano_18: (minutes*0.90).toFixed(2)
      };

      const planThirty = {      
        plano_30_16: 0 >= (minutes-30)*(1.90*1.1)? 0 : ((minutes-30)*(1.90*1.1)).toFixed(2),
        plano_30_17: 0 >= (minutes-30)*(1.70*1.1)? 0 : ((minutes-30)*(1.70*1.1)).toFixed(2),
        plano_30_18: 0 >= (minutes-30)*(0.90*1.1)? 0 : ((minutes-30)*(0.90*1.1)).toFixed(2)
      };

      const planSixty = {
        plano_60_16: 0 >= (minutes-60)*(1.90*1.1)? 0 : ((minutes-60)*(1.90*1.1)).toFixed(2),
        plano_60_17: 0 >= (minutes-60)*(1.70*1.1)? 0 : ((minutes-60)*(1.70*1.1)).toFixed(2),
        plano_60_18: 0 >= (minutes-60)*(0.90*1.1)? 0 : ((minutes-60)*(0.90*1.1)).toFixed(2)
      };
    
      const planOnetwenty = {
        plano_120_16: 0 >= (minutes-120)*(1.90*1.1)? 0 : ((minutes-120)*(1.90*1.1)).toFixed(2),
        plano_120_17: 0 >= (minutes-120)*(1.70*1.1)? 0 : ((minutes-120)*(1.70*1.1)).toFixed(2),
        plano_120_18: 0 >= (minutes-120)*(0.90*1.1)? 0 : ((minutes-120)*(0.90*1.1)).toFixed(2)
      };

      return { dest_ddd ,planOnetwenty, planSixty, planThirty, noPlanValue};
  }
}

export { CalculateEleven };