const React=require('react');
class Index extends React.Component{
    render(){
        const {pokemon} =this.props;
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        return(
        <> 
        <h1 style={myStyle}> See All The Pokemon!</h1>
        <ul style={myStyle}>
            {pokemon.map((pokemon, i)=>{
                return(
                    <li style={myStyle}>
                    <a  href={`./pokemon${i}`}style={myStyle}>{(pokemon.name)}</a>
                    </li>
                )
            })}
        </ul>

        </>
        );
        
    }
}
module.exports=Index;