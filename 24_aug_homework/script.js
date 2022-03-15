function getTodoItems() {
  return fetch("https://graphql.us.fauna.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer fnAEhuUoOyAAQv9WP1HfvbdHorYVM1GZoAIdyifZ",
    },
    body: JSON.stringify({
      query: `
        query {
          allTodoItems {
            data {
              _id
              title
              done
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then((graphqlData) => {
      if (graphqlData.errors) {
        graphqlData.errors.forEach((error) =>
          console.error(`GraphQL error: ${error.message}`)
        );
        throw new Error("GraphQL error");
      } else {
        return graphqlData.data.allTodoItems.data;
      }
    });
}

function renderTodoItem(id, title) {
  const li = document.createElement("li");
  li.innerText = title;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  li.appendChild(deleteButton);

  document.querySelector("ul").appendChild(li);
  deleteButton.addEventListener("click", function () {
    deleteTodoItem(id).then(() => li.remove());
  });
}

getTodoItems().then((items) => {
  for (const item of items) {
    renderTodoItem(item._id, item.title);
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = form.querySelector("input");
  createTodoItem(input.value).then((item) => {
    renderTodoItem(item._id, item.title);
    input.value = "";
  });
});