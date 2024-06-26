export default function Shipping() {
    return (
        <div class="row wrapper">
            <div class="col-10 col-lg-5">
                <form class="shadow-lg">
                    <h1 class="mb-4">Shipping Info</h1>
                    <div class="form-group">
                        <label for="address_field">Address</label>
                        <input
                            type="text"
                            id="address_field"
                            class="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="city_field">City</label>
                        <input
                            type="text"
                            id="city_field"
                            class="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label htmlFor="phone_field">Phone No</label>
                        <input
                            type="phone"
                            id="phone_field"
                            class="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="postal_code_field">Postal Code</label>
                        <input
                            type="number"
                            id="postal_code_field"
                            class="form-control"
                            value=''
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="country_field">Country</label>
                        <select
                            id="country_field"
                            class="form-control"
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
                        class="btn btn-block py-3"
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </div>
    )
}