const Scroll = (props:any) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px', padding: '8px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
