//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,num) => {
   if(num<1000){
     if (Math.abs(num) % 100 >= 11 && Math.abs(num) % 100 <= 13) {
      return (name + ", you are the " + num + "th customer we serve today. Thank you!")
    }
     if(Math.abs(num)%10==1){
       return (name+", you are the "+num+"st customer we serve today. Thank you!")
     }
     else if(Math.abs(num)%10==2){
       return (name+", you are the "+num+"nd customer we serve today. Thank you!")
     }
     else if(Math.abs(num)%10==3){
       return (name+", you are the "+num+"rd customer we serve today. Thank you!")
     }
     else{
       return (name+", you are the "+num+"th customer we serve today. Thank you!")
     }
   }
};
