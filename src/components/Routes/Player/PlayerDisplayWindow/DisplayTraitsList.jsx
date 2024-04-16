import { useState } from "react";
import styles from '../../../../styles/PlayerDisplay/DisplayWindow.module.css';
import inventoryStyle from "../../../../styles/PlayerDisplay/DisplayInventory.module.css"
import { List, Collapse, Tooltip } from "@mui/material";



export async function itemsLoader({params}){
    try {
        const result = await axios.get(`http://localhost:8080/player/items/${params.playerid}`) ;
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

const parseTraits = (traits)=>{
    const int = [];
    const ext = [];
    const spc = [];

    for(const trait of traits){
        switch(trait.trait_type){
            case 'INT':
                int.push(trait);
                break;
            case 'EXT':
                ext.push(trait);
                break;
            case 'SPC':
                spc.push(trait);
                break;
        }
    }

    return [int,ext,spc];
}




export default function DisplayTraitsList(props){
    const [open, setOpen] = useState(0);
    const [activeTraits, setActiveTraits] = useState(new Set);

    const handleTraitClick = (e)=>{
        setOpen(e.target.value);
    }

    const handleActiveClick = (e) =>{
        //console.log(e.target.innerHTML); 
        let hash = new Set(activeTraits);
        
        if(activeTraits.has(e.target.textContent)){
            hash.delete(e.target.textContent);
            setActiveTraits(hash);
            props.clickAgain(e);
            
        }else{
            hash.add(e.target.textContent);
            setActiveTraits(hash);
            
            props.click(e);
        }
        
    }

    const [int, ext,spc] = parseTraits(props.traits);
    
    return (
        <div className={styles.displayPortrait}>
            
                <List sx={{width: '150px', display: "flex", flexDirection: 'column'}}>
                    <button className={open=='0'? styles.active: ''} 
                        type = "submit" 
                        name = "Intrinsic Traits" 
                        value = "0" 
                        aria-label="intrinsic trait tab" 
                        onClick={handleTraitClick}>
                        Intrinsic Traits
                    </button>

                        <Collapse in={open=='0'} sx={{width: '100%'}}>
                            <ul className={inventoryStyle.trait}>
                                {//list traits with hoverable tooltips
                                    props.traits && int.map((x,i)=>{
                                        return <li key={i} style={activeTraits.has(x.trait_name)?{border: '2px solid #53bee9'}:{}}>
                                        <Tooltip 
                                        placement="right"
                                        title = {//for the tooltip. 
                                            <div className={inventoryStyle.itemHover} >
                                                <h2>
                                                    {x.trait_name}
                                                </h2>
                                                <p>
                                                    {x.trait_description}
                                                </p>
                                                <p>
                                                    {x.trait_effect.split('|')[0]}
                                                </p>
                                            </div>
                                        }>
                                            <p id={x.trait_effect}  onClick = {handleActiveClick} style={{fontSize: 16}}>{x.trait_name}</p>
                                        </Tooltip></li>
                                    })
                                }
                            </ul>
                        </Collapse>
                    <button 
                    className={open=='1'? styles.active: ''}
                        type = "submit"
                        name = "Extrinsic Traits" 
                        value = "1" 
                        aria-label="extrinsinc trait tab" 
                        onClick={handleTraitClick}>
                        Extrinsic Traits
                      </button>
                        <Collapse in={open=='1'}>
                            <ul className={inventoryStyle.trait}>    
                                {//list traits with hoverable tooltips
                                    props.traits && ext.map((x,i)=>{
                                        return <li key={i}>
                                        <Tooltip 
                                            placement="right"
                                            title = {
                                            <div className={inventoryStyle.itemHover}>
                                                <h2>
                                                    {x.trait_name}
                                                </h2>
                                                <p>
                                                    {x.trait_description}
                                                </p>
                                                <p>
                                                    {x.trait_effect.split('|')[0]}
                                                </p>
                                            </div>
                                        } >
                                            <p id={x.trait_effect} onClick = {props.click}  style={{fontSize: 16}}>{x.trait_name}</p>
                                        </Tooltip></li>
                                    })
                                }
                            </ul>
                        </Collapse>
                    <button
                        className={open=='2'? styles.active: ''}
                        type = "submit"
                        name = "Special Traits"
                        value = "2"
                        aria-label="special trait tab"
                        onClick={handleTraitClick}>
                        Special Traits
                    </button>
                        <Collapse in={open=='2'}>
                            <ul className={inventoryStyle.trait}>
                                {//list traits with hoverable tooltips
                                    props.traits && spc.map((x,i)=>{
                                        return <li key={i}><Tooltip 
                                        placement="right"
                                        title = {
                                            <div className={inventoryStyle.itemHover}>
                                                <h2>
                                                    {x.trait_name}
                                                </h2>
                                                <p>
                                                    {x.trait_description}
                                                </p>
                                                <p>
                                                    {x.trait_effect.split('|')[0]}
                                                </p>
                                            </div>
                                        }>
                                            <p id={x.trait_effect} onClick = {props.click}  style={{fontSize: 16}}>{x.trait_name}</p>
                                        </Tooltip></li>
                                    })
                                }
                            </ul>
                        </Collapse>
                </List>
            </div>
    )
}