export default function Header(){
    return(
        <nav classN="navbar row">
      <div classN="col-12 col-md-3">
        <div classN="navbar-brand">
          <img width="150px" src="./images/logo.png" />
        </div>
      </div>

      <div classN="col-12 col-md-6 mt-2 mt-md-0">
        <div classN="input-group">
          <input
            type="text"
            id="search_field"
            classN="form-control"
            placeholder="Enter Product Name ..."
          />
          <div classN="input-group-append">
            <button id="search_btn" classN="btn">
              <i classN="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div classN="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button classN="btn" id="login_btn">Login</button>

        <span id="cart" classN="ml-3">Cart</span>
        <span classN="ml-1" id="cart_count">2</span>
      </div>
    </nav>
    )
}