export default function MyComp(  
{handleColor}) {
    return <>
    <button onClick={()=> handleColor ('red')}>Red </button>
    <button onClick={()=> handleColor ('green')}> Green</button>
    <button onClick={()=> handleColor ('blue')}> Blue</button>
    </>
}