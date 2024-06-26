export default function NewProduct() {
    return (
        <div class="wrapper my-5">
            <form class="shadow-lg" encType='multipart/form-data'>
                <h1 class="mb-4">New Product</h1>

                <div class="form-group">
                    <label for="name_field">Name</label>
                    <input
                        type="text"
                        id="name_field"
                        class="form-control"
                        value=""
                    />
                </div>

                <div class="form-group">
                    <label for="price_field">Price</label>
                    <input
                        type="text"
                        id="price_field"
                        class="form-control"
                        value=""
                    />
                </div>

                <div class="form-group">
                    <label for="description_field">Description</label>
                    <textarea class="form-control" id="description_field" rows="8" ></textarea>
                </div>

                <div class="form-group">
                    <label for="category_field">Category</label>
                    <select class="form-control" id="category_field">
                        <option>Electronics</option>
                        <option>Home</option>
                        <option>Others</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="stock_field">Stock</label>
                    <input
                        type="number"
                        id="stock_field"
                        class="form-control"
                        value=""
                    />
                </div>

                <div class="form-group">
                    <label for="seller_field">Seller Name</label>
                    <input
                        type="text"
                        id="seller_field"
                        class="form-control"
                        value=""
                    />
                </div>

                <div class='form-group'>
                    <label>Images</label>

                    <div class='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            class='custom-file-input'
                            id='customFile'
                            multiple
                        />
                        <label class='custom-file-label' for='customFile'>
                            Choose Images
                        </label>
                    </div>
                </div>


                <button
                    id="login_button"
                    type="submit"
                    class="btn btn-block py-3"
                >
                    CREATE
                </button>

            </form>
        </div>
    )
}