export const fetchSubscription = id =>
  $.ajax({
    method: "GET",
    url: `api/subscriptions/${id}`
  });

export const fetchAllSubscriptions = () =>
  $.ajax({
    method: "GET",
    url: `api/subscriptions`
  });

export const createSubscription = subscription =>
  $.ajax({
    method: "POST",
    url: `api/subscriptions/`,
    data: { subscription }
  });
