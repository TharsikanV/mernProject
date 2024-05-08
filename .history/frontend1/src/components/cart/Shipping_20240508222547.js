import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { countries } from 'countries-list';

export default function Shipping() {
    const { shippingInfo } = useSelector(state => state.cartState)

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const dispatch=useDispatch();

    const countryList = Object.values(countries);//values ah maddum edukkum

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShi)
    }

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg">
                    <h1 className="mb-4">Shipping Info</h1>
                    <div className="form-group">
                        <label htmlFor="address_field">Address</label>
                        <input
                            type="text"
                            id="address_field"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city_field">City</label>
                        <input
                            type="text"
                            id="city_field"
                            className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlhtmlFor="phone_field">Phone No</label>
                        <input
                            type="phone"
                            id="phone_field"
                            className="form-control"
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postal_code_field">Postal Code</label>
                        <input
                            type="number"
                            id="postal_code_field"
                            className="form-control"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country_field">Country</label>
                        <select
                            id="country_field"
                            className="form-control"
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                            required
                        >
                            {countryList.map((country,i) => (
                                // i endrathu ovvoru value ooda index
                                <option key={i} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state_field">State</label>
                        <input
                            type="number"
                            id="state_field"
                            className="form-control"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
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