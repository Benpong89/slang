export const fetchDirectMessage = id =>
  $.ajax({
    method: "GET",
    url: `api/direct_messages/${id}`
  });

export const fetchAllDirectMessages = () =>
  $.ajax({
    method: "GET",
    url: `api/direct_messages`
  });

export const createDirectMessage = direct_message =>
  $.ajax({
    method: "POST",
    url: `api/direct_messages/`,
    data: { direct_message }
  });
