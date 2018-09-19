export const fetchAllUsers = () =>
  $.ajax({
    method: "GET",
    url: `api/users`
  });

export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export const signin = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
};

export const signout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};

// export const addChannelSubscription = (user) => {
//   return $.ajax ({
//     method: "PATCH",
//     url: `/api/user/${user.id}`
//   })
// }
