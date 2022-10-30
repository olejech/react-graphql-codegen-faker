import {
  ApiMutationSwitchDoneArgs,
  ApiNewTodo,
  ApiTodo,
} from "./graphql-schema";

export type ApiResponse<T> = Promise<{ data: { result: T } }>;
type Variables = { variables?: Record<string, any> };

type CallApiOptions = {
  url?: string;
  body: ({ query: string } & Variables) | ({ mutation: string } & Variables);
};

export const callApi = async <T>({
  url = "http://localhost:9002/graphql/",
  body,
}: CallApiOptions): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const { data } = await response.json();
    return data.result;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const getTodos = (): Promise<ApiTodo[]> => {
  return callApi<ApiTodo[]>({
    body: {
      query: `query allTodos {
        result: todos {
          id
          title
          done
        }
      }`,
    },
  });
};

export const switchTodo = ({
  id,
}: ApiMutationSwitchDoneArgs): Promise<ApiTodo> => {
  return callApi({
    body: {
      query: `mutation switchDone($id: ID!){
        result: switchDone(id: $id) {
          id
          done
        }
      }`,
      variables: {
        id,
      },
    },
  });
};

export const createTodo = (nextTodo: ApiNewTodo): Promise<ApiTodo> => {
  const { title, text, userId } = nextTodo;
  return callApi({
    body: {
      query: `mutation createTodo {
        result: createTodo(input: {title: "${title}", text: "${text}", userId: "${userId}"}) {
          id
          title
          done
        }
      }`,
    },
  });
};

export const getTodosWithDate = (): Promise<ApiTodo[]> => {
  return callApi<ApiTodo[]>({
    body: {
      query: `query TodosWithDate {
        result: todos {
          id
          title
          createdAt
        }
      }`,
    },
  });
};

export const getTodosFull = (): Promise<ApiTodo[]> => {
  return callApi<ApiTodo[]>({
    body: {
      query: `query TodosFull {
        result: todos {
          id
          title
          text
        }
      }`,
    },
  });
};
