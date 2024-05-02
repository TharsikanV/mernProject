import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");//inputla startla emty string koduththa undefine error ah thavirkalaam

    const searchHandler = (e) => {//event aala call seyyapadira function
        e.preventDefault();//intha form submit aaki browser load aakiratha thadukkum
        navigate(`/search/${keyword}`)
    }

    const clearKey

    return (
        <form onSubmit={searchHandler}>
            <div className="input-group">

                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                    onChange={(e) => { setKeyword(e.target.value) }}
                    value={keyword}
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>


            </div>
        </form>
    )
}