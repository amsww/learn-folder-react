const rowInput = ({data}) => {
    const [inputOne,setInputOne]=useState("");
    const [inputTwo,setInputTwo]=useState("");
    
    return (
        <div className='inputMainDiv'>
            <div className='inputOneDiv'>
            <input type={"number"} onChange={e=>setInputOne(e.target.value)} placeholder='Lenth' className='inputOne'></input>
            <span>ft</span>
            </div>
            <div>
            <input type={"number"} onChange={e=>setInputTwo(e.target.value)} placeholder='Width' className='inputTwo'></input>
            <span>ft</span>
            </div>
        </div>
    )
}

export const AppNew = () => {
    const inputData = []
    return(
        inputData.map((inp) => {
            <rowInput data={inp}  />
        })
    )
}