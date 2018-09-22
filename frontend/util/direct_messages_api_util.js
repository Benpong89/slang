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

export const createDirectMessage = userId =>
  $.ajax({
    method: "POST",
    url: `api/direct_messages/`,
    data: { userId }
  });

export const deleteDirectMessage = id =>
  $.ajax({
    method: "DELETE",
    url: `api/direct_messages/${id}`
  });
