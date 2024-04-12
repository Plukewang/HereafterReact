import { useState } from "react";

export default function DisplayAdvantage(){
    const [adv, setAdv] = useState([]);

    const handleAdd = (e)=>{
        
        setAdv(prev=> [...prev, e.target.alt]);
    }

    const handleSub = (e)=>{
        setAdv(prev=> prev.slice(0,-1));
    }

    return(
        <div >
            <ul style={{display:"flex", width: '100%', justifyContent: 'center'}}>
                {
                    adv.map((x,i)=>{
                        if(x=='move'){
                            return <li key={i}><img alt = 'move' src = '../../move.png' /></li>
                        }else if(x=='skill'){
                            return <li key={i}  ><img alt = 'skill' src = '../../skill.png'/></li>
                        }else{
                            return <li key={i}><img alt = 'turn' src = '../../turn.png'/></li>
                        }
                    })
                }       
            </ul>
            <div style={{display:"flex", width: '200', justifyContent: 'center'}}>
                <button  type="submit" value='move'><img onClick={handleAdd} alt = 'move' src = '../../move.png'/></button>
                <button type="submit" value='skill'><img onClick={handleAdd} alt = 'skill' src = '../../skill.png'/></button>
                <button type="submit" value='turn'><img onClick={handleAdd} alt = 'turn' src = '../../turn.png'/></button>
                <button onClick={handleSub}>-</button>
            </div>
            
        </div>
    )

}