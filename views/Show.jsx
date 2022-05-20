const React= rquires('react')
class Show extends React.Component {
    render () {
        const {pokemon} =this.props;
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        return(
        <> 
        <h1 style={myStyle}> Gotta Catch 'Em All!</h1>
        <ul style={myStyle}>
            {pokemon.map((pokemon, i)=>{
                return(
                    <li style={myStyle}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.img} alt="" />
                    <a  href={`./pokemon${i}`}style={myStyle}>Back</a>
                    </li>
                )
            })}
        </ul>

        </>
        );
        }
    
       
}
module.exports=Show;