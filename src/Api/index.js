import react from 'react';

const Homedata = async()=> {
   try {
       const res = await fetch(`http://safeart.alshumaal.com/api/homepage/homepage.php`)
       const userdata = await res.json();   
       return userdata;        
   }
   catch (e) {
       console.log(e)
   }
}
 export default Homedata;
 


 export const Bothdata = async ()=> {
      try {
          const result = await fetch(`http://safeart.alshumaal.com/api/homepage/featured_art.php`)
          const solo = await result.json();
          return solo;
      }
      catch (e) {
          console.log(e)
      }

  }
 