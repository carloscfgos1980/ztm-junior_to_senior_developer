interface AddNumbersProps {
  count: number;
  addOne: any;
  decOne: any;
  children?: React.ReactNode;
}


const AddNumbers= ({count, addOne, decOne}:AddNumbersProps) => {
    return (
        <div>
            <h3>count: {count}</h3>
            <button className="space" onClick={addOne}>add</button>
            <button className="space" onClick={decOne}>dec</button>
        </div>
    )
}

export default AddNumbers