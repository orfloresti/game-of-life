const Cell = ({ life }) => {
    return life 
        ? <h1> white </h1>
        : <h1> black </h1>;
}

export default Cell;
