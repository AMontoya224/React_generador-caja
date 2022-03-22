




const BoxDisplay = (props) => {
    let box = props.box;

    const divStyleFun = (item) => {
        return {
            background: `${item[0]}`,
            width : `${item[1]}px`, 
            height : `${item[1]}px`,
            margin : '10px',
            display : 'inline-block'
        }
    };
    return (
        <>{
            box.map( (item, i) => <div key={ i } style={divStyleFun(item)}></div> )
        }</>
    );
};

export default BoxDisplay;