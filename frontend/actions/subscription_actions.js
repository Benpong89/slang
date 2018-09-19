import * as SubscriptionsAPIUtil from "../util/subscriptions_api_util";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const RECEIVE_ALL_SUBSCRIPTIONS = "RECEIVE_ALL_SUBSCRIPTIONS";

export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const receiveAllSubscriptions = subscriptions => ({
  type: RECEIVE_ALL_SUBSCRIPTIONS,
  subscriptions
});

export const createSubscription = subscription => dispatch =>
  SubscriptionsAPIUtil.createSubscription(subscription).then(subscription =>
    dispatch(receiveSubscription(subscription))
  );

export const requestSubscription = subscription => dispatch =>
  SubscriptionsAPIUtil.fetchSubscription(subscription).then(subscription =>
    dispatch(receiveSubscription(subscription))
  );

export const requestAllSubscriptions = () => dispatch =>
  SubscriptionsAPIUtil.fetchAllSubscriptions().then(subscriptions =>
    dispatch(receiveAllSubscriptions(subscriptions))
  );
