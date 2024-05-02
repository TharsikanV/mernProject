

export default function Search() {
    
    const searchHandler=(e)=>{//event aala call seyyapadira function
        e.preventDefault();//intha form submit aaki browser load aakiratha thadukkum
    }
    return (
        <div className="input-group">
            <form onSubmit={searchHandler}>
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </form>

        </div>
    )
}