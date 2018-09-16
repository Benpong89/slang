export const fetchMessage = id =>
  $.ajax({
    method: "GET",
    url: `api/messages/${id}`
  });

export const fetchAllMessages = () =>
  $.ajax({
    method: "GET",
    url: `api/messages`
  });

export const createMessage = message =>
  $.ajax({
    method: "POST",
    url: `api/messages/`,
    data: { message }
  });
