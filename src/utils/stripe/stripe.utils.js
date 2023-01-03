import { loadStripe } from "@stripe/stripe-js";

export const stripePromise =  loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    //"pk_test_51M3NwTJJn6a0YuquJa1p1qMb5SjN6q6jPfa0rVFsWM7URM1W5vLktu6ZFIqqv0CHqRjz98gf0R2WVPbVbuNDAAx500Ius0wLt4"
);