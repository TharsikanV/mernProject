export default function Shipping() {
    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg">
                    <h1 className="mb-4">Shipping Info</h1>
                    <div className="form-group">
                        <label htmlor="address_field">Address</label>
                        <input
                            type="text"
                            id="address_field"
                            className="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlor="city_field">City</label>
                        <input
                            type="text"
                            id="city_field"
                            className="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlhtmlor="phone_field">Phone No</label>
                        <input
                            type="phone"
                            id="phone_field"
                            className="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlor="postal_code_field">Postal Code</label>
                        <input
                            type="number"
                            id="postal_code_field"
                            className="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlor="country_field">Country</label>
                        <select
                            id="country_field"
                            className="form-control"
                            value=''
                            required
                        >
                            <option>
                                India
                            </option>
                            <option>
                                USA
                            </option>

                        </select>
                    </div>

                    <button
                        id="shipping_btn"
                        type="submit"
                        className="btn btn-block py-3"
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </div>
    )
}