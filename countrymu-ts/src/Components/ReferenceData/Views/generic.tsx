
import React from "react";

export default function Generic () {

    interface Props <T> {
        renderItem: (item: T) => React.ReactNode;
        keyExtractor: (item: T) => string;
        data: T[];
      }
      
      const GenericList = <T extends unknown>({
        data,
        renderItem,
        keyExtractor
      }: Props <T>) => {
          
 return(

          // <div>
          // <input onChange={handleInput} placeholder="Enter name"/>
          // <button onClick={logValue}>Log value</button>
      
          <div>
            {data.map((item) => (
              <div key = {keyExtractor(item)} className = "item">
                {renderItem(item)}
                </div> 
            ))}
     
        </div> 
   )
  }
}
