


export const getTodos = async (id) => {
  try {
    const response = await fetch(`/api/todo/${id} `,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({userid: id})
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getTodos = async () => {
//   try {
//     const response = await fetch(`/api/todo`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addTodo = async (todo, userid) => {
  try {
    const response = await fetch(`/api/todo/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todo, userid: userid }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};