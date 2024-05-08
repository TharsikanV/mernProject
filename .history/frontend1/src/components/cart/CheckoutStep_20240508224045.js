export default function CheckoutSteps(){
    return(
        <div class="checkout-progress d-flex justify-content-center mt-5">
        <div class="triangle2-completed"></div>
        <div class="step complete">Shipping Info</div>
        <div class="triangle-completed"></div>

        <div class="triangle2-active"></div>
        <div class="step active">Payment</div>
        <div class="triangle-active"></div>

        <div class="triangle2-incomplete"></div>
        <div class="step incomplete">Confirm Order</div>
        <div class="triangle-incomplete"></div>
      </div>
    )
}