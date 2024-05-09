const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=await stripe.paymentIntent.create({
        amount:req.body.amount,
        currency:""
        description:"TEST PAYMENT",
        metaData:{integration_check:"accept_payment"},
        shipping:req.body.shipping
    })

    res.status(200).json({
        success:true,
        client_secret:paymentIntent.client_secret
        //ithu ovvoru payment kkum ovvoru vithamaana client_secret key ah kodukkum
        //itha frontend la use pannuvam
    })
})

exports.sendStripeApi=catchAsyncError(async(req,res,next)=>{
    res.status(200).json({
        stripeApiKey:paymentIntent.process.env.STRIPE_API_KEY
        //frontend ooda stripe integration kku thevaipadum
    })
})