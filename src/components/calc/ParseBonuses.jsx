

const parseBonus = (bonus)=>{
    let out = [];

    //iterate through a string of bonuses and extracts the specific bonuses.
    bonus = bonus.split(" "); //the bonuses are separated after the | by a space and inside [] as a 3-capitalized letter code and a + or - and then digits.
    
    for(const eff of bonus){
        //a bonus now looks like [XXX+Y]
        
        let b = eff.substring(1,eff.length-1);//remove the [].
        let stat = b.substring(0,3);// get the 3-letter code
        let sign = b.charAt(3);//sign is whether the 4th char (always + or -) is positive or negative
        
        switch(stat){
            //add the actual bonus to the list.
            case stat = 'DPT':
                out.push(sign == '+'? {dpt: Number(b.substring(4))}: {dpt: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                break;
            case stat = 'INS':
                out.push(sign == '+'? {ins: Number(b.substring(4))}: {ins: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'AGI':
                out.push(sign == '+'? {agi: Number(b.substring(4))}: {agi: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'PHY':
                out.push(sign == '+'? {phy: Number(b.substring(4))}: {phy: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;        
            case stat = 'PRC':
                out.push(sign == '+'? {prc: Number(b.substring(4))}: {prc: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                break;
            case stat = 'LVL':
                out.push(sign == '+'? {lvl: Number(b.substring(4))}: {lvl: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'INT':
                out.push(sign == '+'? {int: Number(b.substring(4))}: {int: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'EFF':
                out.push(sign == '+'? {eff: Number(b.substring(4))}: {def: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;   
            case stat = 'DEF':
                out.push(sign == '+'? {eff: Number(b.substring(4))}: {def: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                break;
            case stat = 'IDT':
                out.push(sign == '+'? {idt: Number(b.substring(4))}: {idt: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'ENT':
                out.push(sign == '+'? {ent: Number(b.substring(4))}: {ent: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'CNT':
                out.push(sign == '+'? {cnt: Number(b.substring(4))}: {cnt: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;        
            case stat = 'INF':
                out.push(sign == '+'? {inf: Number(b.substring(4))}: {inf: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                break;
            case stat = 'SYM':
                out.push(sign == '+'? {sym: Number(b.substring(4))}: {sym: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'VER':
                out.push(sign == '+'? {ver: Number(b.substring(4))}: {ver: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;
            case stat = 'PRP':
                out.push(sign == '+'? {prp: Number(b.substring(4))}: {prp: -1* Number(b.substring(4))})//we convert the bonus to a number and make it negative if the sign is negative.
                    break;   
        }
    }
    //console.log(out)
    return out;

}

const parseBonuses = (bonuses) =>{
    //bonuses is a hashmap of item names and bonuses
}

export default parseBonus;
export {parseBonuses};