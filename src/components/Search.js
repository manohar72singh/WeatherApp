import React from 'react'
import '../css/Search.css'
function Search({value, data, change, submit}){
    return(
        <>
            <form className="search__container" onSubmit={submit}>
                <input type="text" value={value} onChange={change} placeholder="e.g. Gaya,Patna.." className="search__input" />
            </form>
        </>
    )
}

export default Search